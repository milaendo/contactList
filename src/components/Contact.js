import React, { Component } from 'react'
import {connect} from 'react-redux'

class Contact extends Component {
	componentWillMount(){
		
	}
	render () {
		return (
			<div>
			<h1>Contact of ID </h1>
			<div className='contactWrap'>
				{this.props.people.filter(person => person)[0]}
				</div>
			</div>
		)
	}
}
function mapAppStateToProps(appState){
	return {
		people: appState.people
	}
}
export default connect(mapAppStateToProps)(Contact)