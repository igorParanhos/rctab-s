import React, { Component } from 'react'
import LoginForm from '../components/loginForm/LoginForm';
import TopBar from '../components/topBar/TopBar';

export class Login extends Component {
  render() {
    return (
      <div style={{ flexGrow: 1 }}>
        <TopBar title="REGISTRO DA PESQUISA" />
        <LoginForm />
      </div>
    )
  }
}

export default Login
