import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './home';
import Navigation from './Navigation';
import Login from './Login';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loginActive: false
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  toggleLogin = () => this.setState(prevState => ({ showLogin: !prevState.showLogin }))

  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Login />
          <Home />
        </div>
      </Router>
    )
  }
}

export default App;