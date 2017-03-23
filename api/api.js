import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import PrettyError from 'pretty-error';
import http from 'http';

import config from '../src/config';
import story from './story';

const app = express();

const server = new http.Server(app);

mongoose.connect(config.databaseUrl);

app.use(bodyParser.json());


app.use('/stories', story.router);

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
