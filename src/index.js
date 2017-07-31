import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AsyncApp from './containers/AsyncApp';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

ReactDOM.render(
	<Provider store={store}>
		<AsyncApp />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
