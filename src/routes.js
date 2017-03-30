import React from 'react';
import {IndexRoute, Route} from 'react-router';

import layouts from './layouts';
import create from './create';
import templates from './templates';
import build from './build';
import customize from './customize';
import publish from './publish';
import story from './story';

export default (store) => {

  const requiresStory = (nextState, replace) => {
    if (!store.getState().createState.story) {
      replace('/');
    }
  };

  return (
    <Route path="/" components={layouts.components.App}>
      <IndexRoute component={templates.components.TemplatesContainer}/>
      <Route path="create" onEnter={requiresStory}>
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
