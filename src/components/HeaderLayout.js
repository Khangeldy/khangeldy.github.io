import React, { Component } from 'react'
import { Menu, Dropdown, Icon, Image } from 'semantic-ui-react'
import { withRouter } from 'react-router'

import ModalComment from './NewCommentModal'

class HeaderLayout extends Component {

  constructor(props) {
    super(props)
    // this.state = {
    //   activeItem: 'home'
    // }
    // this.handleItemClick = this.handleItemClick.bind(this)
    this.handleLogOut = this.handleLogOut.bind(this)
  }

  // handleItemClick(e, { name }) {
  //   this.setState({ activeItem: name})
  // }

  handleLogOut() {
    sessionStorage.removeItem('authToken');
    this.props.router.push('/login')
  }

  componentWillMount() {
    const head = new Headers({
      'Authorization': 'JWT ' + sessionStorage.getItem('authToken')
    })
    this.props.getUser('http://109.120.189.5:8081/users/me', {
      headers: head,
      method: 'GET'
    });

  }

  render() {

    // const { activeItem } = this.state

    const trigger = (<span>
            <Image avatar src='images/square-image.png' />
            { this.props.email }
            <Icon disabled name='angle down' />
          </span>)

    return (
      <div className='ui padded grid'>
        <div className="ui one column grid">
          <Menu secondary>
            <Menu.Item>
              <ModalComment
                email={this.props.email}
                postComment={this.props.onPostComment}
                onError={this.props.new_c_onError}
                onPending={this.props.new_c_onPending}
                onSuccess={this.props.new_c_onSuccess}
                />
            </Menu.Item>
            <Menu.Menu position='right'>
              <Dropdown item icon={false} trigger={trigger} simple>
                <Dropdown.Menu>
                  <Dropdown.Item>Друзья</Dropdown.Item>
                  <Dropdown.Item>Настройка</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={this.handleLogOut}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
          </Menu>
        </div>
      </div>
    )
  }
}

HeaderLayout.propTypes = {
  email: React.PropTypes.string.isRequired,
  new_c_onPending: React.PropTypes.bool.isRequired,
  new_c_onSuccess: React.PropTypes.bool.isRequired,
  new_c_onError: React.PropTypes.bool.isRequired,
}

const HeaderLayoutWithRouter = withRouter(HeaderLayout)

export default HeaderLayoutWithRouter
