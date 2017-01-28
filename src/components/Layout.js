import React, { Component } from 'react'

import Load from './Loader'
import HeaderContainer from '../containers/HeaderContainer'

class Layout extends Component {
  constructor() {
    super();
    this.state = {loading: true}
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({loading: false})
    }, 3000)
  }
  render() {
    return (
      <div className="App">
        <Load loaded={this.state.loading}/>
        <HeaderContainer />
        <main className="App__content">
          {this.props.children}
        </main>

      </div>
    )
  }
}

export default Layout;
