import { connect } from 'react-redux'
import { getComments } from '../actions/getComments'

import Root from '../components/routes/Root'

const mapStateToProps = (state) => ({
  comments: state.comments.getAll,
  onError: state.comments.onError,
  pending: state.comments.pending,
});

const mapDispatchToProps = (dispatch) => ({
  getComments: (url, config) => dispatch(getComments(url, config))
});

const RootContainer = connect(mapStateToProps, mapDispatchToProps)(Root)

export default RootContainer
