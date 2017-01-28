import React, { Component } from 'react'

import { Icon, Menu, Table } from 'semantic-ui-react'

class TableComment extends Component {
  constructor(props) {
    super(props)
    this.goto = this.goto.bind(this)
    this.sortString = this.sortString.bind(this)
    this.commentsPerPage = 10;
    this.state = {sliceComments: [], activePagin: 1, activeHeaderCell: null}
    this.pagCount = Math.ceil(this.props.data.length / this.commentsPerPage);
    this.paging = new Array(this.pagCount);
  }

  componentDidMount() {
    const slice = this.props.data.slice(0, this.commentsPerPage)
    this.setState({sliceComments: slice})
    this.pagCount = Math.ceil(this.props.data.length / this.commentsPerPage);
    this.paging = new Array(this.pagCount);
  }

  goto(pagination) {
    const from = pagination * 10 - 10;
    const newSlice = this.props.data.slice(from, from + this.commentsPerPage)
    this.setState({sliceComments: newSlice, activePagin: pagination})
  }

  prevPagination() {
    if(this.state.activePagin > 1) {
      const nextPagin = this.state.activePagin - 1;
      this.goto(nextPagin)
    }
  }

  nextPagination() {
    if(this.state.activePagin < this.pagCount) {
      const nextPagin = this.state.activePagin + 1;
      this.goto(nextPagin)
    }
  }

  sortString(sort) {
    let sorted;
    const that = this;
    if(this.props.data[0][sort] > this.props.data[1][sort]) {
      sorted = sortBY(1);
    } else {
      sorted = sortBY(-1);
    }

    const result = sorted.slice().slice(0, this.commentsPerPage)
    this.setState({sliceComments: result});

    function sortBY(bool) {
      if(bool > 0) {
        return that.props.data.sort((a,b) => {
          if(a[sort] > b[sort]) {
            return 1
          } else {
            return -1;
          }
        })
      } else {
        return that.props.data.sort((a,b) => {
          if(a[sort] < b[sort]) {
            return 1
          } else {
            return -1;
          }
        })
      }

    }

    this.setState({activeHeaderCell: sort})

  }

  render() {
    const cell1 = this.state.activeHeaderCell === '_id' ? {sorted: 'descending'}: null;
    const cell2 = this.state.activeHeaderCell === 'text' ? {sorted: 'descending'}: null;
    const cell3 = this.state.activeHeaderCell === 'email' ? {sorted: 'descending'}: null;
    const cell4 = this.state.activeHeaderCell === 'createdAt' ? {sorted: 'descending'}: null;
    const cell5 = this.state.activeHeaderCell === 'updatedAt' ? {sorted: 'descending'}: null;
    return (
      <Table celled sortable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell {...cell1} onClick={(e) => this.sortString('_id')}>id</Table.HeaderCell>
            <Table.HeaderCell {...cell2} onClick={(e) => this.sortString('text')}>Текст</Table.HeaderCell>
            <Table.HeaderCell {...cell3} onClick={(e) => this.sortString('email')}>E-mail</Table.HeaderCell>
            <Table.HeaderCell {...cell4} onClick={(e) => this.sortString('createdAt')}>Дата создания</Table.HeaderCell>
            <Table.HeaderCell {...cell5} onClick={(e) => this.sortString('updatedAt')}>Дата правки</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.state.sliceComments.map(comment => {
            return <Table.Row key={comment._id}>
              <Table.Cell>{comment.userId}</Table.Cell>
              <Table.Cell>{comment.text}</Table.Cell>
              <Table.Cell>{comment.email}</Table.Cell>
              <Table.Cell>{comment.createdAt}</Table.Cell>
              <Table.Cell>{comment.updatedAt}</Table.Cell>
            </Table.Row>
          })}
        </Table.Body>

        <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan='5'>
            <Menu floated='right' pagination>
              <Menu.Item as='a' icon onClick={() => this.prevPagination()}>
                <Icon name='left chevron' />
              </Menu.Item>
              {this.paging.fill(1).map((item, i) => {
                return <Menu.Item as='a' key={i+1} active={this.state.activePagin === i+1} onClick={() => this.goto(i+1)}> {i+1}</Menu.Item>
              })}
              <Menu.Item as='a' icon onClick={() => this.nextPagination()}>
                <Icon name='right chevron' />
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
        </Table.Footer>
      </Table>
    )
  }
}

export default TableComment
