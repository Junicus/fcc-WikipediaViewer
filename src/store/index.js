import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { rootReducer } from '../reducers';

const initialState = {};

const enhancers = [];
const middleware = [
	thunkMiddleware,
	createLogger()
];

if (process.env.NODE_ENV === 'development') {
	const devToolsExtension = window.devToolsExtension;
	if (typeof devToolsExtension === 'function') {
		enhancers.push(devToolsExtension());
	}
}

const composedEnhancers = compose(
	applyMiddleware(...middleware),
	...enhancers
);

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
