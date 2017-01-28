import React, { Component } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react'
import TableComment from '../TableComment'

class Root extends Component {
  constructor(props) {
    super(props)
    this.commentsPerPage = 10
  }
  componentWillMount() {
    this.props.getComments('http://109.120.189.5:8081/comments?filter={"limit":50,"sort": "-createdAt"}');
  }

  render() {
    return (
      <div>
        <Dimmer active={this.props.pending}>
          <Loader />
        </Dimmer>
        {  this.props.comments && <TableComment
          data={this.props.comments}
          pageCount={this.commentsPerPage}
         /> }
      </div>
    );
  }
}

Root.propTypes = {
  getComments: React.PropTypes.func.isRequired,
  comments: React.PropTypes.array.isRequired,
  pending: React.PropTypes.bool.isRequired
}

export default Root;
