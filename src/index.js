import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './components/Home'
import ListView from './components/ListView'
import Contact from './components/Contact'
import {Provider} from 'react-redux'
import store from './store'

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Switch>
				<Route exact path='/' component={Home}/>
				<Route path='/ListView' component={ListView}/>
				<Route path='/Contact/:id' component={Contact}/>
			</Switch>
		</Router>
	</Provider>
, document.getElementById('root'));
registerServiceWorker();
