import React from 'react'
import { Link } from 'react-router'

import AuthForm from '../AuthForm'

const Register = ({route, registerMe, onSuccess, onError, pending}) => {
  const onRegister = (event, data) => {
    event.preventDefault()
    console.log(data)
    const head = new Headers({
      'Content-Type': 'application/json'
    })
    console.log(data.formData)
    registerMe('http://109.120.189.5:8081/users/register', {
      method: 'POST',
      headers: head,
      body: JSON.stringify(data.formData)}
    )

    event.target.reset()

  }
  return (
    <AuthForm onSubmit={onRegister} response={onSuccess} pending={pending} responseError={onError} buttonText="Регистрация">
      <div>У вас уже есть аккаунт? <Link to='/login'> Вводите</Link></div>
    </AuthForm>
  )
}

Register.propTypes = {
  registerMe: React.PropTypes.func.isRequired,
  onSuccess: React.PropTypes.bool.isRequired,
  onError: React.PropTypes.bool.isRequired,
  pending: React.PropTypes.bool.isRequired
}


export default Register
