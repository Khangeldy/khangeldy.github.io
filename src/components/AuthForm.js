import React from 'react'
import { Button, Form, Message } from 'semantic-ui-react'

const AuthForm = ({onSubmit, response, responseError, pending, buttonText, children}) => {
  return (
    <div className="ui middle aligned center aligned grid auth-container">
      <div className="column auth-container__column">
        <h2 className="ui teal header aligned center">{buttonText}</h2>
        <Form success={response} loading={pending} error={responseError} onSubmit={onSubmit} className="ui aligned left">
          <Form.Field>
            <label>E-mail</label>
            <input type="email" placeholder='E-mail' name="email" required />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type="password" placeholder='password' name="password" required />
          </Form.Field>
          <Button type='submit'>{buttonText}</Button>
          <Message warning header='Неправильный' content="Вы ввели не правильный данные"/>
          <Message success header='Успешно'
            content="Вы успешно прошли регистрацию"/>
          <Message
            error
            header='Action Forbidden'
            content='You can only sign up for an account once with a given e-mail address.'
          />
        </Form>

        <Message>
          {children}
        </Message>
      </div>

    </div>
  )
}

AuthForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  response: React.PropTypes.bool,
  responseError: React.PropTypes.bool,
  pending: React.PropTypes.bool,
  buttonText: React.PropTypes.string
}

export default AuthForm
