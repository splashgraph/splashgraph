import * as actionTypes from './actionTypes';

export function createStory(story) {
  return {
    types: [actionTypes.CREATE_REQUEST, actionTypes.CREATE_SUCCESS, actionTypes.CREATE_FAILURE],
    promise: client => client.post('/stories', story)
  };
}

export function setupStory(templateName) {
  return {
    type: actionTypes.SETUP_STORY,
    templateName
  };
}

export function setData(storyPointIndex, data, columns) {
  return {
    type: actionTypes.SET_DATA,
    storyPointIndex,
    data,
    columns
  };
}

export function setDimension(storyPointIndex, dimension, column) {
  return {
    type: actionTypes.SET_DIMENSION,
    storyPointIndex,
    dimension,
    column
  };
}

export function setDataKey(dataKey) {
  return {
    type: actionTypes.SET_DATA_KEY,
    dataKey
  };
}

export function setOption(optionName, value) {
  return {
    type: actionTypes.SET_OPTION,
    optionName,
    value
  };
}

export function setStoryPointTitle(storyPointIndex, title) {
  return {
    type: actionTypes.SET_STORY_POINT_TITLE,
    storyPointIndex,
    title
  };
}

export function setStoryPointDesc(storyPointIndex, description) {
  return {
    type: actionTypes.SET_STORY_POINT_DESC,
    storyPointIndex,
    description
  };
}

export function setTitle(title) {
  return {
    type: actionTypes.SET_TITLE,
    title
  };
}

export function setDescription(description) {
  return {
    type: actionTypes.SET_DESCRIPTION,
    description
  };
}

export function addStoryPoint(storyPoint) {
  return {
    type: actionTypes.ADD_STORY_POINT,
    storyPoint
  };
}

export function removeStoryPoint(storyPointIndex) {
  return {
    type: actionTypes.REMOVE_STORY_POINT,
    storyPointIndex
  };
}
