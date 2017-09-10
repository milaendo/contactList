import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getPerson} from '../actions/contactACT'
import {Link} from 'react-router-dom'

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
			<div className='firstWrap'>
			<Link to='/ListView' ><img src='http://www.free-icons-download.net/images/green-back-button-icon-65921.png' alt='button' id='backbutton'/> </Link>
			<h1>{this.props.name.first}'s Contact Information </h1>
				<div className='contactWrap'>
					<img src='https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg' alt='anon' className='anon'/>
					<div>{this.props.name.first} {this.props.name.last}</div>
					<div>{this.props.email}</div>
					<div>{this.props.phone}</div>
					<div>{this.props.location.city},{this.props.location.state}</div>
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

// <div>{this.props.picture.large}</div>