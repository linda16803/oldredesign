/********************************
 * @file: todolist page
 * @desc: react-redux todo list
 * @author: leinov
 * @date:2018-12-06
 *******************************/

import React from "react";
import {connect} from "react-redux";
import Nav from "../component/nav";

class App extends React.Component {
	constructor(props){
		super(props);
		this.state={}
	}

	render() {
	
		return (
			<div>
				<Nav />
				<div className="col-sm-8">
					<h1 className="title">  todo list</h1>
					
				</div>
				
			</div>
		);
	}
}


export default App;

