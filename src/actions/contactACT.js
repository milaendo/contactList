import store from '../store'

export function getData(){
	fetch('https://randomuser.me/api/?results=15&seedbanana')
	.then(response => {
		return response.json()})
	.then(data => {
		console.log(data)
		store.dispatch({
			type:'FETCH_DATA',
			people:data.results
		})
	})
}