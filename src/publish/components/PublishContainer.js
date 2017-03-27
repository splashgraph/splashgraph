import {connect} from 'react-redux';

import create from '../../create';
import Publish from './Publish';
const {setTitle, setDescription, createStory} = create.actions;

const mapStateToProps = state => {
  return {
    story: state.createState.story,
    isLoading: state.createState.isLoading,
    isLoaded: state.createState.isLoaded
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTitle: title => dispatch(setTitle(title)),
    setDescription: description => dispatch(setDescription(description)),
    createStory: story => dispatch(createStory(story))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Publish);
