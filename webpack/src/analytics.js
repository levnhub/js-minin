// import * as $ from 'jquery';

// function createAnalytics() {
// 	let counter = 0;
// 	let destroyed = false;

// 	const listener = () => counter++;

// 	$(document).on('click', listener);

// 	return {
// 		destroy() {
// 			$(document).off('click', listener),
// 			destroyed = true;
// 		},

// 		getClicks() {
// 			if (destroyed) {
// 				return `Analytics is destroyed. Total clicks = ${counter}`;
// 			}
// 			return counter;
// 		}
// 	}
// }

// vanilla
function createAnalytics() {
	let counter = 0;
	let destroyed = false;

	const listener = () => counter++;

	document.addEventListener('click', listener);

	return {
		destroy() {
			document.removeEventListener('click', listener);
			destroyed = true;
		},

		getClicks() {
			if (destroyed) {
				return `Analytics is destroyed. Total clicks = ${counter}`;
			}
			return counter;
		}
	}
}

window.analytics = createAnalytics();