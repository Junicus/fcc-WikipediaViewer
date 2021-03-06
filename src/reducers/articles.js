import { REQUEST_ARTICLES_SEARCH_TOPIC, RECEIVED_ARTICLES } from '../actions';

const initialState = {
	isFetching: false
}

export function articles(state = initialState, action) {
	switch (action.type) {
		case REQUEST_ARTICLES_SEARCH_TOPIC:
			return Object.assign({}, state, { isFetching: true });
		case RECEIVED_ARTICLES:
			return Object.assign({}, state, {
				isFetching: false,
				data: action.articles
			});
		default:
			return state;
	}
}
