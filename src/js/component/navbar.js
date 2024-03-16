import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/addContact">
				<span className="navbar-brand mb-0 h1">Create Contact</span>
			</Link>
			<div className="ml-auto">
				<Link to="/">
					<button className="btn btn-primary">Home</button>
				</Link>
			</div>
		</nav>
	);
};
