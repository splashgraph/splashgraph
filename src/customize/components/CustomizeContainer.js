import {connect} from 'react-redux';

import create from '../../create';
const {setOption} = create.actions;
import Customize from './Customize';

const mapStateToProps = state => {
  return {
    story: state.createState.story
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setOption: (optionName, value) => dispatch(setOption(optionName, value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Customize);
