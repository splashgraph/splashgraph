import {connect} from 'react-redux';

import Completion from './Completion';

const mapStateToProps = state => {
  return {
    story: state.createState.story
  };
};

export default connect(mapStateToProps)(Completion);