import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AsyncApp from './containers/app';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import dotenv from 'dotenv';

dotenv.config();

ReactDOM.render(
	<Provider store={store}>
		<AsyncApp />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
