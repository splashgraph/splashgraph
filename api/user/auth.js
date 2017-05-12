import passport from 'passport';
import passportJwt from 'passport-jwt';

import User from './model';

const config = {
  jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeader(),
  secretOrKey: process.env.JWT_KEY || 'local development key'
};

const strategy = new passportJwt.Strategy(config, (payload, next) => {
  User.findById(payload.id, (err, user) => {
    console.log(user, err);
    if (err || !user) {
      next(null, false);
    } else {
      next(null, user);
    }
  });
});

passport.use(strategy);

export default config;