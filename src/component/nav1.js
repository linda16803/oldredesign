
import React, { Component } from "react";
import "./nav.scss";
import logo from "../pages/penguin.jpg"
import '../App.css';
export default class Nav1 extends Component {

	render() {
		return (
			<div className="row row-header">
				<div className="column is-2 logo"><img  src={logo} /></div>
				<div className="columns column nav is-8">
					<div className="nav-item"><a href= "/">Home</a></div>
					<div className="nav-item"><a href= "/todo">Todo</a></div>
					<div className="nav-item"><a href= "/upload">Upload</a></div>
					<div className="nav-item"><a href= "https://github.com/leinov/webpack-react-multi-page/">Github</a></div>
				</div>
				<div className="column is-2"></div>
				
	    </div>
		);
	}
}
