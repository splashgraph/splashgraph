import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {login} from '../actions';
import Login from './Login';

const mapStateToProps = state => {
  return {
    isLoading: state.authState.loginIsLoading,
    isLoaded: state.authState.loginIsLoaded
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: bindActionCreators(login, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);