import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import auth from '../../auth';
import App from './App';
const {logout} = auth.actions;

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authState.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: bindActionCreators(logout, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);