import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { asyncIncrement, changeTheme, decrement, incerement } from './redux/actions.js';
// import { createStore } from './createStore.js'; // cutom redux sample
import { rootReducer } from './redux/rootReducer.js'; 
import './styles.css';

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

// Custom Logger
// function logger(state) {
// 	return function (next) {
// 		return function (action) {
// 			console.log('Prev State', state.getState());
// 			console.log('Action', action);
// 			const newState = next(action);
// 			console.log('New State', newState);
// 			return next(action);
// 		}
// 	}
// }

const store = createStore(
	// Set reducers
	rootReducer, 
	// Compose Middleware with DevTools (manual)
	// compose(
	// 	applyMiddleware(thunk, logger),
	// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	// )
	// Compose Middleware with DevTools (plugin)
	composeWithDevTools (
		applyMiddleware(thunk, logger),
		// other store enhancers if any
	)
	
);

// const store = createStore(
// 	reducer, /* preloadedState, */
// +  
// );


addBtn.addEventListener('click', function() {
	store.dispatch(incerement());
})

subBtn.addEventListener('click', function() {
	store.dispatch(decrement());
})

asyncBtn.addEventListener('click', function() {
	store.dispatch(asyncIncrement());
})

themeBtn.addEventListener('click', function() {
	const newTheme = document.body.classList.contains('light')
		? 'dark'
		: 'light';
	store.dispatch(changeTheme(newTheme));
})

store.subscribe(() => {
	const state = store.getState();

	counter.textContent = state.counter;
	document.body.className = state.theme.value;

	[addBtn, subBtn, themeBtn, asyncBtn].forEach(btn => 
		btn.disabled = state.theme.disabled
	)
});

store.dispatch({type: 'INIT_APPLICATION'});