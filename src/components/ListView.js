import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class ListView extends Component {
	render () {
		return (
			<div className='listMain'>
			<Link to='/' ><img src='http://www.free-icons-download.net/images/green-back-button-icon-65921.png' alt='button' id='backbutton'/> </Link>
			<h1>ListView</h1>
			<div>
			
			{this.props.people.map(data => (
				<div className='listWrap'>
					<img src={data.picture.thumbnail} alt="" className='listPic'/>
					<Link key={data.shortid} to={'/Contact/' + data.shortid} ><p>{data.name.first} {data.name.last}</p></Link>
					</div>
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