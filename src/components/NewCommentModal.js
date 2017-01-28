import React, { Component } from 'react'
import { Button, Header, Modal, Form, TextArea, Menu, Message } from 'semantic-ui-react'

class ModalComment extends Component {
  constructor(props) {
    super(props)
    this.state = {open: false}
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  handleOpen = (e) => this.setState({
    open: true,
  })

  handleClose = (e) => {
    this.setState({open: false})
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.onSuccess) {
      this.handleClose()
    }
  }

  onSubmitHandler(event, data) {
    event.preventDefault()
    const head = new Headers({
      'Authorization': 'JWT ' + sessionStorage.getItem('authToken'),
      'Content-Type': 'application/json'
    })
    this.props.postComment('http://109.120.189.5:8081/comments', {
      method: 'POST',
      headers: head,
      body: JSON.stringify(data.formData)
    })

  }

  render() {
    const {email, onError, onPending} = this.props

    return (
      <Modal
        open={this.state.open}
        onClose={this.handleClose}
        trigger={<Menu.Item name='Написать коммент' onClick={this.handleOpen} icon="pencil" />}>
        <Modal.Header>Написать Коммент</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>От имени: {email}</Header>
            <Form onSubmit={this.onSubmitHandler} error={onError} loading={onPending}>
              <Form.Field>
                <label>Текст комментария</label>
                <TextArea placeholder='Ваш коммент' name="text" />
              </Form.Field>
              <Button type='submit'>Отправить</Button>
              <Message
                error
                header='Ошибка сохрание'
                content='Попробуйте позже.'
              />
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }

}

export default ModalComment
