import React , {Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import './w3school.css';
import Menu from './components/MenuComponent';
<<<<<<< HEAD
import Nav from "./component/nav";
import Footer from "./component/footer";
=======
import {BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Upload from './components/Upload';
import Home from './components/Home';

>>>>>>> 8416ebc2b4e618fa83805ac564d4159edb12d637
import { CONFIG } from './shared/config';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: CONFIG
    };
  }
render(){
  return (
<<<<<<< HEAD
    <div>
    <Nav />
    <div className="App">
        

      </div>
      <Menu dishes={this.state.dishes} />
      <div class ="footer fixed-bottom">
      this is footer 
      </div>
    </div>  
    
=======
    <>
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/upload" component={Upload}/>
      </Switch>
    </Router>
    </>
>>>>>>> 8416ebc2b4e618fa83805ac564d4159edb12d637
  );
  }
}
export default App;