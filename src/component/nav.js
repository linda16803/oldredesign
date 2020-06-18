
import React, { Component } from "react";
import "./nav.scss";
import logo from "../pages/penguin.jpg"

export default class Nav extends Component {

	render() {
		return (
			<div className="menu columns">
				<div className="col-sm-2 logo"><img  src={logo} /></div>
				<div className="columns nav col-sm-8">
					<div className="nav-item"><a href= "/">Home</a></div>
					<div className="nav-item"><a href= "/todo">Todo</a></div>
					<div className="nav-item"><a href= "/test1">Upload</a></div>
					<div className="nav-item"><a href= "https://github.com/leinov/webpack-react-multi-page/">Github</a></div>
				</div>
				<div className="col-sm-2"></div>
				
	    </div>
		);
	}
}
