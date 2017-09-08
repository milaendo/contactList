import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getPerson} from '../actions/contactACT'

class Contact extends Component {
	static defaultProps = {
		name: {
			first:'',
			last:''
		}
	}
	componentWillMount(){
		getPerson(this.props.match.params.id)
	}
	render () {
		console.log(this.props)
		return (
			<div>
			<h1>Contact of ID </h1>
			<div className='contactWrap'>
			{this.props.name.first}
			</div>
			</div>
		)
	}
}
function mapAppStateToProps(appState){
	return {
		...appState.person
	}
}
export default connect(mapAppStateToProps)(Contact)