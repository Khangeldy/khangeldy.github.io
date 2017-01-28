import React from 'react'
import { Link } from 'react-router'

import AuthForm from '../AuthForm'


const Login = ({route,router, loginMe, onSuccess, onError, pending}) => {
  const onLogin = (event, data) => {
    event.preventDefault();

    console.log(event.target)

    const head = new Headers({
      'Content-Type': 'application/json'
    });

    loginMe('http://109.120.189.5:8081/users/login', {
      method: 'POST',
      headers: head,
      body: JSON.stringify(data.formData)
    })
  }

  return (
    <AuthForm onSubmit={onLogin} response={onSuccess} responseError={onError} pending={pending} buttonText="Вход">
      <div>У вас нет аккаунта? <Link to='/registration'> Зарегистрируйтесь</Link></div>
    </AuthForm>
  )
}

Login.propTypes = {
  loginMe: React.PropTypes.func.isRequired,
  onSuccess: React.PropTypes.bool.isRequired,
  onError: React.PropTypes.bool.isRequired,
  pending: React.PropTypes.bool.isRequired
}


export default Login
