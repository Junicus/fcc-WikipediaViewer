export const REQUEST_ARTICLES_SEARCH_TOPIC = 'REQUEST_ARTICLES_SEARCH_TOPIC';
function requestArticles(topic) {
	return {
		type: REQUEST_ARTICLES_SEARCH_TOPIC,
		topic
	}
}

export function fetchArticles(topic) {
	return function (dispatch) {
		dispatch(requestSearchTopic(topic));
		// fetch topic links
		// for result list
		// `/w/api.php?action=query&format=json&prop=extracts&generator=search&exintro=1&gsrsearch=${topic}`
	};
}

export const REQUEST_ARTICLES_AUTOCOMPLETE = 'REQUEST_ARTICLES_AUTOCOMPLETE';
function requestAutocomplete(topic) {
	return {
		type: REQUEST_ARTICLES_AUTOCOMPLETE,
		topic
	}
}

export function fetchAutocomplete(topic) {
	return function (dispatch) {
		dispatch(requestAutocomplete(topic));
		// fetch topic links
		// for dropdown
		// `/w/api.php?action=query&format=json&prop=pageprops%7Cpageimages%7Cpageterms&generator=prefixsearch&ppprop=displaytitle&piprop=thumbnail&pithumbsize=80&pilimit=6&wbptterms=description&gpssearch=${topic}`
	}
}

export const RECEIVED_AUTOCOMPLETE = 'RECEIVED_AUTOCOMPLETE';
export function receivedAutocomplete(articles) {
	return {
		type: RECEIVED_AUTOCOMPLETE,
		articles
	}
}

export const RECEIVED_ARTICLES = 'RECEIVED_ARTICLES';
export function receivedArticles(articles) {
	return {
		type: RECEIVED_ARTICLES,
		articles
	}
}
