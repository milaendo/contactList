import React, { Component } from 'react';
import '../styles/App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './Home'
import ListView from './ListView'
import Contact from './Contact'
import {Provider} from 'react-redux'
import store from '../store'
import {getData} from '../actions/contactACT'

class App extends Component {
	componentDidMount() {
		getData()
	}

  render() {
    return (
      <div>
      	<Provider store={store}>
      		<Router>
      			<Switch>
      				<Route exact path='/' component={Home}/>
      				<Route path='/ListView' component={ListView}/>
      				<Route path='/Contact/:id' component={Contact}/>
      			</Switch>
      		</Router>
      	</Provider>
      </div>
    );
  }
}

export default App;
