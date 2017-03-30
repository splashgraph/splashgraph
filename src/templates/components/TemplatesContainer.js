import {connect} from 'react-redux';

import create from '../../create';
const {setupStory} = create.actions;
import Templates from './Templates';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    setupStory: templateName => dispatch(setupStory(templateName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Templates);
