import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class ListView extends Component {
	render () {
		return (
			<div>
			<h1>ListView</h1>
			<div>

			{this.props.people.map(data => (
				<Link key={data.shortid} to={'/Contact/' + data.shortid} ><p>{data.name.first} {data.name.last}</p></Link>

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