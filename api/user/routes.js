import express from 'express';
import jwt from 'jsonwebtoken';
import passport from 'passport';

import jwtConfig from './auth';
import User from './model';
const router = express.Router();

router.route('/')
  .post((req, res) => {
    const {email, password} = req.body;
    if (!email || !password) {
      res.status(400);
    }

    const user = new User({email, password});
    user.save((err) => {
      if (err) {
        res.status(500);
      }
      res.status(201).send(user);
    });
  });

router.route('/login')
  .post((req, res) => {
    const {email, password} = req.body;

    if (!email || !password) {
      res.status(401);
    }
    // usually this would be a database call:
    User.findOne({email}, (err, user) => {
      if (err) {
        res.status(500).send(err);
      }
      if (!user) {
        res.status(404);
      }
      user.comparePassword(password, (err, isMatch) => {
        // from now on we'll identify the user by the id and the id is the only personalized value that goes into our token
        if (err) {
          res.status(500);
        }
        if (isMatch) {
          const payload = {id: user.id};
          const token = jwt.sign(payload, jwtConfig.secretOrKey);
          res.status(200).json({token, user});
        } else {
          res.status(401).send('Invalid password');
        }
      });
    });
  });

export default router;