import { combineReducers } from 'redux';
import { articles } from './articles';
import { search } from './search';
import { autocomplete } from './autocomplete';

export const rootReducer = combineReducers({
	search,
	autocomplete,
	articles,
});

export default rootReducer;
