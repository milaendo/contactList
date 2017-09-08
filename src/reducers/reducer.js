const initialState={
	people:[],
	person:{}
}

export default function (state=initialState, action){
	switch(action.type){
		case 'FETCH_DATA':
			return {...state, people:action.people}
		case 'FETCH_PERSON':
			return {...state, person:action.person}
		default: return state 
	}
}