import React, { Component } from 'react'
//import { Container, SubHeader, Cancel, SelectionGroup, Selection, Form, Wrapper } from './styles'
//import { Button, Input, FlexContainer } from '../GlobalStyles'
import axios from 'axios'
import { setToken } from '../../services/tokenService';

class Login extends Component {
	state = {
		type: 'login',
		message: null
	}

	handleChange = e => this.setState({ [e.target.name]: e.target.value })

	handleSubmit = async e => {
		e.preventDefault()

		const { email, password, type } = this.state;
		const route = type === 'login' ? 'login' : 'signup'
		try {
			const res = await axios.post(`/api/users/${route}`, {
				data: {
					email: email,
					password: password
				}
			});
			const token = res.data.data.token;
			setToken(token)
			this.props.hideLogin();
		} catch (e) {
			this.setState({ message: e });
			console.log(e);
		}
	}

	changeForm = type => {
		this.setState({ type: type })
	}

	render() {
		const { type } = this.state

		return (
			<form>
				<div class="form-group">
					<label for="exampleInputEmail1">Email address</label>
					<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
				</div>
				<div class="form-group">
					<label for="exampleInputPassword1">Password</label>
					<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
				</div>
				<button type="submit" class="btn btn-primary">Submit</button>
			</form>
		)
	}
}

export default Login;
