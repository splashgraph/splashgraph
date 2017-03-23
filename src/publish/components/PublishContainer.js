import {connect} from 'react-redux';

import create from '../../create';
import Publish from './Publish';
const {setTitle, setDescription} = create.actions;

const mapStateToProps = state => {
  return {
    story: state.createState.story
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTitle: title => dispatch(setTitle(title)),
    setDescription: description => dispatch(setDescription(description))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Publish);
