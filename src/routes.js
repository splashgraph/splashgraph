import React from 'react';
import {IndexRoute, Route} from 'react-router';

import create from './create';
import build from './build';
import customize from './customize';
import publish from './publish';

export default (store) => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/">
      <Route path="create" component={create.components.Create}>
        <Route path="build" component={build.components.BuildContainer}/>
        <Route path="customize" component={customize.components.CustomizeContainer}/>
        <Route path="publish" component={publish.components.PublishContainer}/>
      </Route>
    </Route>
  );
};
