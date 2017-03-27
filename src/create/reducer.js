import * as actionTypes from './actionTypes';

const initialState = {
  story: {
    options: {},
    storyPoints: [{
      data: [],
      dimensions: {}
    }]
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_TEMPLATE: {
      const newStory = Object.assign({}, state.story, {
        templateName: action.templateName
      });
      return Object.assign({}, state, {
        story: newStory
      });
    }
    case actionTypes.SET_DATA: {
      const newStoryPoints = state.story.storyPoints.map((storyPoint, index) => {
        if (index === action.storyPointIndex) {
          return Object.assign({}, storyPoint, {
            data: action.data,
            columns: action.columns
          });
        }
        return storyPoint;
      });
      const newStory = Object.assign({}, state.story, {
        storyPoints: newStoryPoints
      });
      return Object.assign({}, state, {
        story: newStory
      });
    }
    case actionTypes.SET_DIMENSION: {
      const newStoryPoints = state.story.storyPoints.map((storyPoint, index) => {
        if (index === action.storyPointIndex) {
          return Object.assign({}, storyPoint, {
            dimensions: Object.assign({}, storyPoint.dimensions, {
              [action.dimension]: action.column
            })
          });
        }
        return storyPoint
      });
      const newStory = Object.assign({}, state.story, {
        storyPoints: newStoryPoints
      });
      return Object.assign({}, state, {
        story: newStory
      });
    }
    case actionTypes.SET_DATA_KEY: {
      const newOptions = Object.assign({}, state.story.options, {
        dataKey: action.dataKey
      });
      const newStory = Object.assign({}, state.story, {
        options: newOptions
      });
      return Object.assign({}, state, {
        story: newStory
      });
    }
    case actionTypes.SET_OPTION: {
      const newOptions = Object.assign({}, state.story.options, {
        [action.optionName]: action.value
      });
      const newStory = Object.assign({}, state.story, {
        options: newOptions
      });
      return Object.assign({}, state, {
        story: newStory
      });
    }
    case actionTypes.SET_STORY_POINT_TITLE: {
      const newStoryPoints = state.story.storyPoints.map((storyPoint, index) => {
        if (index === action.storyPointIndex) {
          return Object.assign({}, storyPoint, {
            title: action.title
          });
        }
        return storyPoint;
      });
      const newStory = Object.assign({}, state.story, {
        storyPoints: newStoryPoints
      });
      return Object.assign({}, state, {
        story: newStory
      });
    }
    case actionTypes.SET_STORY_POINT_DESC: {
      const newStoryPoints = state.story.storyPoints.map((storyPoint, index) => {
        if (index === action.storyPointIndex) {
          return Object.assign({}, storyPoint, {
            description: action.description
          });
        }
        return storyPoint;
      });
      const newStory = Object.assign({}, state.story, {
        storyPoints: newStoryPoints
      });
      return Object.assign({}, state, {
        story: newStory
      });
    }
    case actionTypes.SET_TITLE: {
      const newStory = Object.assign({}, state.story, {
        title: action.title
      });
      return Object.assign({}, state, {
        story: newStory
      });
    }
    case actionTypes.SET_DESCRIPTION: {
      const newStory = Object.assign({}, state.story, {
        description: action.description
      });
      return Object.assign({}, state, {
        story: newStory
      });
    }
    case actionTypes.ADD_STORY_POINT: {
      const newStory = Object.assign({}, state.story, {
        storyPoints: state.story.storyPoints.concat([action.storyPoint])
      });
      return Object.assign({}, state, {
        story: newStory
      });
    }
    case actionTypes.REMOVE_STORY_POINT: {
      const newStory = Object.assign({}, state.story, {
        storyPoints: state.story.storyPoints.filter((storyPoint, index) => index !== action.storyPointIndex)
      });
      return Object.assign({}, state, {
        story: newStory
      });
    }
    case actionTypes.CREATE_REQUEST:
      return {
        ...state,
        isLoading: true,
        isLoaded: false
      };
    case actionTypes.CREATE_SUCCESS:
      return {
        ...state,
        story: action.result.data,
        isLoading: false,
        isLoaded: true
      };
    case actionTypes.CREATE_FAILURE:
      return {
        ...state,
        isLoading: false,
        isLoaded: false
      };
    default:
      return state;
  }
}
