import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import PrettyError from 'pretty-error';
import http from 'http';
import passport from 'passport';

import config from '../src/config';
import story from './story';
import user from './user';

const app = express();

const server = new http.Server(app);

mongoose.connect(config.databaseUrl);

app.use(passport.initialize());
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

app.use('/stories', story.router);
app.use('/users', user.router);

if (config.apiPort) {
  app.listen(config.apiPort, (err) => {
    if (err) {
      console.error(err);
    }
    console.info('----\n==> 🌎  API is running on port %s', config.apiPort);
    console.info('==> 💻  Send requests to http://%s:%s', config.apiHost, config.apiPort);
  });
} else {
  console.error('==>     ERROR: No PORT environment variable has been specified');
}
