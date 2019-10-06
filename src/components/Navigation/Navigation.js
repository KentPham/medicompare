import React from 'react';
//import { NavLink } from 'react-router-dom';

const Navigation = ({ toggleLogin, user, logout, classes }) => {
	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<a class="navbar-brand" href="#">Medicompare</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div class="navbar-nav">
					{/*<a class="nav-item nav-link active" href="#">Login<span class="sr-only">(current)</span></a>>*/}
				</div>
			</div>
		</nav>
	)
}

export default Navigation;