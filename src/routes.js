import React from 'react';
import {IndexRoute, Route} from 'react-router';

import create from './create';
import templates from './templates';
import build from './build';
import customize from './customize';
import publish from './publish';
import story from './story';

export default (store) => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/">
      <IndexRoute component={templates.components.TemplatesContainer}/>
      <Route path="create">
        <Route component={create.components.Create}>
          <Route path="build" component={build.components.BuildContainer}/>
          <Route path="customize" component={customize.components.CustomizeContainer}/>
          <Route path="publish" component={publish.components.PublishContainer}/>
        </Route>
        <Route path="completed" component={publish.components.CompletionContainer}/>
      </Route>
      <Route path="stories">q
        <Route path=":storyId" component={story.components.StoryContainer}/>
      </Route>
    </Route>
  );
};
