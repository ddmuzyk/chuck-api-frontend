import React, {Component} from 'react';
import './App.css';
// import Button from './components/Button/Button';
import Output from './components/Output/Output';
import Signin from './components/SignIn/Signin';
import Register from './components/Register/Register';
// import Dropdown from './components/Dropdown/Dropdown';

const initialState = {
    route: 'signin',
        output: '',
        url: 'random',
        isSignedIn: false,
        user: {
            id: "",
            name: '',
            email: '',
            entries: 0,
            joined: ''
        }
}

class App extends Component {
    constructor() {
        super()
        this.state = {
            route: 'signin',
            output: '',
            url: 'random',
            isSignedIn: false,
            user: {
                id: "",
                name: '',
                email: '',
                entries: 0,
                joined: ''
            }
        }
    }

    loadUser = (data) => {
        this.setState({user: {
            id: data.id,
            name: data.name,
            email: data.entries,
            entries: data.entries,
            joined: data.joined
        }})
        // console.log(this.state);
    }

    onButtonClick = () => {
        fetch('http://localhost:3000/generate', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: this.state.user.id
            })
        })
        .then(response => response.json())
        .then(count => {
            this.setState(Object.assign(this.state.user, {entries: count} ))
        })
    
        // let url = this.state;
        // {url === 'random' ? (
            fetch('https://api.chucknorris.io/jokes/random')
            .then(res => res.json())
            .then(data => data['value'])
            .then(joke => this.setState({output: joke}))
            .catch(err => console.log(err))
        // ) : (
        //     fetch(`https://api.chucknorris.io/jokes/random?category=${url}`)
        //     .then(res => res.json())
        //     .then(data => data['value'])
        //     .then(joke => this.setState({output: joke}))
        //     .catch(err => console.log(err))
        //     )
        
        
    }

    handleStateOfUrl = (value) => {
        this.setState({url: value})
    }

    // onRouteChange = (route) => {
    //     this.setState({route: route})
    // }

    onRouteChange = (route) => {
        if (route === 'signin') {
            this.setState(initialState);
        } else if (route === 'home') {
            this.setState({isSignedIn: true});
        }
        this.setState({route: route});
    }

    render() {
        
        // // return (
        // //     <div>
        // //         <Output 
        // //         joke={this.state.output}
        // //         onButtonClick={this.onButtonClick}
        // //         />
        // //     </div>
        // // )
        const {route} = this.state;
        if (route === 'signin') {
            return <div>
                <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            </div>
        } else if (route === 'register') {
            return <div>
                <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            </div>
        } else if (route === 'home') {
            return <div>
                <Output 
                name={this.state.user.name}
                entries={this.state.user.entries}
                onRouteChange={this.onRouteChange}
                joke={this.state.output} 
                onButtonClick={this.onButtonClick}
                url={this.state.url}
                />
            </div>
        }
    }

}

export default App;