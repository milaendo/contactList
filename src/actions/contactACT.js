import store from '../store'
import shortid from 'shortid'


export function getData(){
	fetch('https://randomuser.me/api/?results=15&seed=banana')
	.then(response => {
		return response.json()})
	.then(data => {
		console.log(data)
		let res = data.results.map(item => {
			return {...item, shortid: shortid.generate()}
		})
		store.dispatch({
			type:'FETCH_DATA',
			people:res
		})
	})
}

export function getPerson(id) {
	store.dispatch({
		type:'FETCH_PERSON',
		id: id
	})
}