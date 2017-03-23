import {connect} from 'react-redux';

import create from '../../create';
const {setData, setDimension, setDataKey, setStoryPointTitle, setStoryPointDesc, addStoryPoint, removeStoryPoint} = create.actions;
import Build from './Build';

const mapStateToProps = state => {
  return {
    story: state.createState.story
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setData: (storyPointIndex, data, columns) => dispatch(setData(storyPointIndex, data, columns)),
    setDimension: (storyPointIndex, dimension, column) => dispatch(setDimension(storyPointIndex, dimension, column)),
    setDataKey: dataKey => dispatch(setDataKey(dataKey)),
    setStoryPointTitle: (storyPointIndex, title) => dispatch(setStoryPointTitle(storyPointIndex, title)),
    setStoryPointDesc: (storyPointIndex, description) => dispatch(setStoryPointDesc(storyPointIndex, description)),
    addStoryPoint: storyPoint => dispatch(addStoryPoint(storyPoint)),
    removeStoryPoint: storyPointIndex => dispatch(removeStoryPoint(storyPointIndex))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Build);
