import { connect } from 'react-redux'
import { loginAction } from '../actions/login'

import Login from '../components/routes/Login'

const mapStateToProps = (state) => ({
  onSuccess: state.login.onSuccess,
  onError: state.login.onError,
  pending: state.login.pending
});

const mapDispatchToProps = (dispatch) => ({
  loginMe: (url, config) => dispatch(loginAction(url, config))
});

const loginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)

export default loginContainer
