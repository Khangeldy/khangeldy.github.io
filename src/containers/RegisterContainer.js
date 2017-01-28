import { connect } from 'react-redux'
import { registerAction } from '../actions'

import Register from '../components/routes/Register'

const mapStateToProps = (state) => ({
  onSuccess: state.register.onSuccess,
  onError: state.register.onError,
  pending: state.register.pending
});

const mapDispatchToProps = (dispatch) => ({
  registerMe: (url, config) => dispatch(registerAction(url, config))
});

const registerContainer = connect(mapStateToProps, mapDispatchToProps)(Register)

export default registerContainer
