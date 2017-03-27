import {connect} from 'react-redux';

import create from '../../create';
const {setTemplate} = create.actions;
import Templates from './Templates';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    setTemplate: templateName => dispatch(setTemplate(templateName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Templates);
