import * as actionTypes from './actionTypes';

const initialState = {
  story: {
    "title": "Cereal Nutrition",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod erat eget tellus elementum, vitae aliquet neque mollis.",
    "template": "ScatterPlot",
    "options": {
      "dataKey": "Cereal Name"
    },
    "storyPoints": [{
      "title": "StoryPoint 1",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod erat eget tellus elementum, vitae aliquet neque mollis.",
      "dimensions": {
        "x": "Fat",
        "y": "Sugars",
        "r": "Calories",
        "color": "Manufacturer",
        "label": "Cereal Name"
      },
      "columns": ["Cereal Name", "Manufacturer", "Type", "Calories", "Protein (g)", "Fat", "Sodium", "Dietary Fiber", "Carbs", "Sugars", "Display Shelf", "Potassium", "Vitamins and Minerals", "Serving Size Weight", "Cups per Serving"],
      "data": [{
        "Cereal Name": "100%_Bran",
        "Manufacturer": "Nabisco",
        "Type": "C",
        "Calories": 70,
        "Protein (g)": 4,
        "Fat": 1,
        "Sodium": 130,
        "Dietary Fiber": 10,
        "Carbs": 5,
        "Sugars": 6,
        "Display Shelf": 3,
        "Potassium": 280,
        "Vitamins and Minerals": 25,
        "Serving Size Weight": 1,
        "Cups per Serving": 0.33
      }, {
        "Cereal Name": "100%_Natural_Bran",
        "Manufacturer": "Quaker Oats",
        "Type": "C",
        "Calories": 120,
        "Protein (g)": 3,
        "Fat": 5,
        "Sodium": 15,
        "Dietary Fiber": 2,
        "Carbs": 8,
        "Sugars": 8,
        "Display Shelf": 3,
        "Potassium": 135,
        "Vitamins and Minerals": 0,
        "Serving Size Weight": 1,
        "Cups per Serving": -1
      }, {
        "Cereal Name": "All-Bran",
        "Manufacturer": "Kelloggs",
        "Type": "C",
        "Calories": 70,
        "Protein (g)": 4,
        "Fat": 1,
        "Sodium": 260,
        "Dietary Fiber": 9,
        "Carbs": 7,
        "Sugars": 5,
        "Display Shelf": 3,
        "Potassium": 320,
        "Vitamins and Minerals": 25,
        "Serving Size Weight": 1,
        "Cups per Serving": 0.33
      }, {
        "Cereal Name": "All-Bran_with_Extra_Fiber",
        "Manufacturer": "Kelloggs",
        "Type": "C",
        "Calories": 50,
        "Protein (g)": 4,
        "Fat": 0,
        "Sodium": 140,
        "Dietary Fiber": 14,
        "Carbs": 8,
        "Sugars": 0,
        "Display Shelf": 3,
        "Potassium": 330,
        "Vitamins and Minerals": 25,
        "Serving Size Weight": 1,
        "Cups per Serving": 0.5
      }]
    }, {
      "title": "StoryPoint 2",
      "description": "Nulla vitae porta odio, aliquam imperdiet nisi. Nullam ut nunc quis justo pulvinar feugiat.",
      "dimensions": {
        "x": "Fat",
        "y": "Sugars",
        "r": "Calories",
        "color": "Manufacturer",
        "label": "Cereal Name"
      },
      "columns": ["Cereal Name", "Manufacturer", "Type", "Calories", "Protein (g)", "Fat", "Sodium", "Dietary Fiber", "Carbs", "Sugars", "Display Shelf", "Potassium", "Vitamins and Minerals", "Serving Size Weight", "Cups per Serving"],
      "data": [{
        "Cereal Name": "100%_Bran",
        "Manufacturer": "Nabisco",
        "Type": "C",
        "Calories": 70,
        "Protein (g)": 4,
        "Fat": 1,
        "Sodium": 130,
        "Dietary Fiber": 10,
        "Carbs": 5,
        "Sugars": 6,
        "Display Shelf": 3,
        "Potassium": 280,
        "Vitamins and Minerals": 25,
        "Serving Size Weight": 1,
        "Cups per Serving": 0.33
      }, {
        "Cereal Name": "100%_Natural_Bran",
        "Manufacturer": "Quaker Oats",
        "Type": "C",
        "Calories": 120,
        "Protein (g)": 3,
        "Fat": 5,
        "Sodium": 15,
        "Dietary Fiber": 2,
        "Carbs": 8,
        "Sugars": 8,
        "Display Shelf": 3,
        "Potassium": 135,
        "Vitamins and Minerals": 0,
        "Serving Size Weight": 1,
        "Cups per Serving": -1
      }, {
        "Cereal Name": "All-Bran",
        "Manufacturer": "Kelloggs",
        "Type": "C",
        "Calories": 70,
        "Protein (g)": 4,
        "Fat": 1,
        "Sodium": 260,
        "Dietary Fiber": 9,
        "Carbs": 7,
        "Sugars": 5,
        "Display Shelf": 3,
        "Potassium": 320,
        "Vitamins and Minerals": 25,
        "Serving Size Weight": 1,
        "Cups per Serving": 0.33
      }, {
        "Cereal Name": "All-Bran_with_Extra_Fiber",
        "Manufacturer": "Kelloggs",
        "Type": "C",
        "Calories": 50,
        "Protein (g)": 4,
        "Fat": 0,
        "Sodium": 140,
        "Dietary Fiber": 14,
        "Carbs": 8,
        "Sugars": 0,
        "Display Shelf": 3,
        "Potassium": 330,
        "Vitamins and Minerals": 25,
        "Serving Size Weight": 1,
        "Cups per Serving": 0.5
      }, {
        "Cereal Name": "Almond_Delight",
        "Manufacturer": "Ralston Purina",
        "Type": "C",
        "Calories": 110,
        "Protein (g)": 2,
        "Fat": 2,
        "Sodium": 200,
        "Dietary Fiber": 1,
        "Carbs": 14,
        "Sugars": 8,
        "Display Shelf": 3,
        "Potassium": -1,
        "Vitamins and Minerals": 25,
        "Serving Size Weight": 1,
        "Cups per Serving": 0.75
      }, {
        "Cereal Name": "Apple_Cinnamon_Cheerios",
        "Manufacturer": "General Mills",
        "Type": "C",
        "Calories": 110,
        "Protein (g)": 2,
        "Fat": 2,
        "Sodium": 180,
        "Dietary Fiber": 1.5,
        "Carbs": 10.5,
        "Sugars": 10,
        "Display Shelf": 1,
        "Potassium": 70,
        "Vitamins and Minerals": 25,
        "Serving Size Weight": 1,
        "Cups per Serving": 0.75
      }, {
        "Cereal Name": "Apple_Jacks",
        "Manufacturer": "Kelloggs",
        "Type": "C",
        "Calories": 900,
        "Protein (g)": 2,
        "Fat": 0,
        "Sodium": 125,
        "Dietary Fiber": 1,
        "Carbs": 11,
        "Sugars": 14,
        "Display Shelf": 2,
        "Potassium": 30,
        "Vitamins and Minerals": 25,
        "Serving Size Weight": 1,
        "Cups per Serving": 1
      }]
    }]
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
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
    default:
      return state;
  }
}
