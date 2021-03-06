import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
	<App />
	</Provider>, document.querySelector('.container'));

registerServiceWorker();
