import React, { Component } from 'react'
import {getData} from '../actions/contactACT'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class ListView extends Component {
	componentWillMount(){
		getData()
	}

	render () {
		return (
			<div>
			<h1>ListView</h1>
			<div>

			{this.props.people.map(data => (
				<Link to={'/Contact/' + data.id.value} ><p>{data.name.first} {data.name.last}</p></Link>

			))}
			</div>
			
			</div>
		)
	}
}

function mapStateToProps(appState){
	return {
		people: appState.people
	}
}
export default connect(mapStateToProps)(ListView)