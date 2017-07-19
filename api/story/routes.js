import express from 'express';
import passport from 'passport';

import Story from './model';

const router = express.Router();

router.route('/')
  .get((req, res) => {
    Story.find((err, stories) => {
      if (err)
        res.send(err);
      res.send(stories);
    });
  })
  .post(passport.authenticate('jwt', {session: false}), (req, res) => {

    const story = new Story(req.body);
    story.save(err => {
      if (err)
        res.send(err);
      res.send(story);
    });
  });

router.route('/:storyId')
  .get((req, res) => {
    Story.findById(req.params.storyId, (err, story) => {
      if (err)
        res.send(err);
      if (!story)
        res.send(404);
      res.send(story);
    });
  });

export default router;