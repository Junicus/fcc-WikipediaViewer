import { SET_TOPIC } from '../actions';

const initialState = {
	topic: ''
}

export function search(state = initialState, action) {
	switch (action.type) {
		case SET_TOPIC:
			return { topic: action.topic };
		default:
			return state;
	}
}
