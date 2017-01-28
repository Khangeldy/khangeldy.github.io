import { connect } from 'react-redux'
import { getUser } from '../actions/user'
import { newComment } from '../actions/newComment'

import HeaderLayoutWithRouter from '../components/HeaderLayout'

const mapStateToProps = (state) => ({
  email: state.user.user.email,
  e_OnError: state.user.onError,
  e_Pending: state.user.pending,
  new_c_onError: state.newComment.onError,
  new_c_onPending: state.newComment.pending,
  new_c_onSuccess: state.newComment.onSuccess
});

const mapDispatchToProps = (dispatch) => ({
  getUser: (url, config) => dispatch(getUser(url, config)),
  onPostComment: (url, config) => dispatch(newComment(url, config))
});

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderLayoutWithRouter)

export default HeaderContainer
