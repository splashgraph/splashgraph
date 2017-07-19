import Express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import config from './config';
import compression from 'compression';
import httpProxy from 'http-proxy';
import path from 'path';
import PrettyError from 'pretty-error';
import http from 'http';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';

import { match, RoutingContext } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import createHistory from 'react-router/lib/createMemoryHistory';
import {Provider} from 'react-redux';

import createStore from './helpers/create';
import Html from './helpers/Html';
import getRoutes from './routes';

const targetUrl = 'http://' + config.apiHost + ':' + config.apiPort;
const pretty = new PrettyError();
const app = new Express();
const server = new http.Server(app);
const proxy = httpProxy.createProxyServer({
  target: targetUrl,
  ws: true
});

app.use(compression());
app.use(cookieParser());

app.use(Express.static(path.join(__dirname, '..', 'static')));

// Proxy to API server
app.use('/api', (req, res) => {
  proxy.web(req, res, {target: targetUrl});
});

// added the error handling to avoid https://github.com/nodejitsu/node-http-proxy/issues/527
proxy.on('error', (error, req, res) => {
  let json;
  if (error.code !== 'ECONNRESET') {
    console.error('proxy error', error);
  }
  if (!res.headersSent) {
    res.writeHead(500, {'content-type': 'application/json'});
  }

  json = {error: 'proxy_error', reason: error.message};
  res.end(JSON.stringify(json));
});

app.use((req, res) => {
  if (__DEVELOPMENT__) {
    // Do not cache webpack stats: the script file would change since
    // hot module replacement is enabled in the development env
    webpackIsomorphicTools.refresh();
  }

  const memoryHistory = createHistory(req.originalUrl);
  const store = createStore(memoryHistory, {
    authState: {
      token: req.cookies.token,
      isAuthenticated: !!req.cookies.token
    }
  });
  const history = syncHistoryWithStore(memoryHistory, store);

  function hydrateOnClient() {
    res.send('<!doctype html>\n' +
      ReactDOM.renderToString(<Html assets={webpackIsomorphicTools.assets()} store={store}/>));
  }

  if (__DISABLE_SSR__) {
    hydrateOnClient();
    return;
  }

  match({ history, routes: getRoutes(store), location: req.originalUrl }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (error) {
      console.error('ROUTER ERROR:', pretty.render(error));
      res.status(500);
      hydrateOnClient();
    } else if (renderProps) {
      const component = (
        <Provider store={store} key="provider">
          <RoutingContext {...renderProps}/>
        </Provider>
      );

      res.status(200);

      global.navigator = {userAgent: req.headers['user-agent']};

      res.send('<!doctype html>\n' +
        ReactDOM.renderToString(<Html assets={webpackIsomorphicTools.assets()} component={component} store={store}/>));
    } else {
      res.status(404).send('Not found');
    }
  });
});

if (config.port) {
  server.listen(config.port, (err) => {
    if (err) {
      console.error(err);
    }
    console.info('----\n==> ✅  %s is running, talking to API server on %s.', config.app.title, config.apiPort);
    console.info('==> 💻  Open http://%s:%s in a browser to view the app.', config.host, config.port);
  });
} else {
  console.error('==>     ERROR: No PORT environment variable has been specified');
}
