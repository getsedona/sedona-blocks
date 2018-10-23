// Header
//------------------------------------------------------------------------------

window.sedona.header = function() {
	if (document.querySelector('.header') === null) {
		return;
	}

	const element = document.querySelector('.header');

	element.querySelector('.js-header-toggle').addEventListener('click', function() {
		element.querySelector('.header__toggle').classList.toggle('header__toggle--active');

		element.querySelector('.header__collapse').classList.toggle('header__collapse--show');

		// if (element.querySelector('.header__collapse').classList.contains('header__collapse--show')) {
		// 	let scrTop = window.pageYOffset;

		// 	document.querySelector('.main').style.position = 'fixed';
		// 	document.querySelector('.main').style.top = -scrTop;
		// 	document.querySelector('.main').style.left = 0;
		// 	document.querySelector('.main').style.right = 0;
		// 	document.querySelector('.main').style.bottom = 0;
		// 	document.querySelector('.main').style.overflow = 'hidden';

		// 	// document.querySelector('.page')/*.data('cb-top', scrTop).addClass('page--overlay')*/.css({
		// 	// 	'position': 'fixed',
		// 	// 	'top': -scrTop,
		// 	// 	'left': 0,
		// 	// 	'right': 0,
		// 	// 	'bottom': 0,
		// 	// 	'overflow': 'hidden'
		// 	// });

		// 	window.scrollTop(0);
		// } else {
		// 	// page.removeClass('page--overlay');

		// 	// setTimeout(function() {
		// 	// 	scrTop = page.data('cb-top') * 1;

		// 	// 	page.removeData('cb-top').removeAttr('style');

		// 	// 	doc.scrollTop(scrTop);
		// 	// }, delay);
		// }
	});
}

sedona.header();
