import React from "react";
import './Register.css';

class Register extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            registerEmail: '',
            registerName: '',
            registerPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({registerEmail: event.target.value})
    }

    onNameChange = (event) => {
        this.setState({registerName: event.target.value})
    }
    
    onPasswordChange = (event) => {
        this.setState({registerPassword: event.target.value})
    }

    onSubmitRegister = () => {
        let {registerEmail, registerName, registerPassword} = this.state;
        if (!registerEmail || !registerName || !registerPassword) {
            console.log('bad request')
        } else {
            fetch('http://localhost:3000/register', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: registerEmail,
                    name: registerName,
                    password: registerPassword
                })
            })
            .then(response => response.json())
            .catch(err => console.log('wrong credentials'))
            this.props.onRouteChange('signin');
        }
        }

    render() {
    return (
        <div className='body'>
            <div className='background'>
                <div className='shape'></div>
                <div className='shape'></div>
            </div>
            <ul>
                <li onClick={() => this.props.onRouteChange('signin')}>Sign in</li>
                {/* <li>Sign out</li> */}
            </ul>
            <div className='formParent'>
                <div className="form">
                    <h3>Register</h3>
                    <label className='username' htmlFor='username'>
                        Email
                    </label>
                    <input onChange={this.onEmailChange}
                    type="text"
                    placeholder='Email address'
                    id='username'/>
                    <label className='name' htmlFor='name'>Name</label>
                    <input onChange={this.onNameChange}
                    type="text" 
                    placeholder='Name' 
                    id='name'/>
                    <label className='password' htmlFor='password'>Password</label>
                    <input onChange={this.onPasswordChange}
                    type="password" 
                    placeholder='Password' 
                    id='password'/>
                    <button onClick={this.onSubmitRegister} className='register'>Register!</button>
                </div>
            </div>
        </div>
     )
    }
}

export default Register;