export const CHANGE_SEARCHFIELD = 'CHANGE_SEARCH_FIELD';

const intialState = {
	searchField: ''
}

export const searchRobots = (state=intialState, action={}) => {
	switch(action.type) {
		case CHANGE_SEARCHFIELD:
			return Object.assign({}, state, {searchField: action.payload});
		default:
			return state;
	}
}