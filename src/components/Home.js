import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Home extends Component {
	render () {
		return (
			<div>
			<h1>Home</h1>
				<div className='nav'>
				<Link to='/ListView'>List of Contacts</Link>
				</div>
			</div>
		)
	}
}

export default Home