import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './style.css';
import App from './components/App.js'
import todoApp from './reducers/reducers.js'
import {LoadState, SaveState} from './containers/LocalStore.js'
import throttle from 'lodash/throttle'
const persistedState = LoadState()

const store = createStore(todoApp,persistedState)
store.subscribe( throttle(
	() =>{
		SaveState({
			todos: store.getState().todos})
	}, 1000)
)
ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);
