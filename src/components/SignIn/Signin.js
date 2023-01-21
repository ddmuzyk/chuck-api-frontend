import React from 'react';
import './Signin.css';

class Signin extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('https://chuckveryfunny-api.onrender.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      })
  }

  render () {
    return (
      <div className='body'>
        <div className='background'>
          <div className='shape'></div>
          <div className='shape'></div>
        </div>
        <ul>
          <li onClick={() => this.props.onRouteChange('register')}>Register</li>
          {/* <li>Sign out</li> */}
        </ul>
        <div className='formParent'>
          <div className='form'>
            <h3>Sign in</h3>
            <label className='username' htmlFor='username'>
              Username
            </label>
            <input onChange={this.onEmailChange} 
            type="text"
            placeholder='Email'
            id='username'/>
            <label className='password' htmlFor='password'>Password</label>
            <input onChange={this.onPasswordChange} 
            type="password" 
            placeholder='Password' 
            id='password'/>
            <button onClick={this.onSubmitSignIn} className='login'>Log in</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Signin;