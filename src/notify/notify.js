// Notify
//------------------------------------------------------------------------------

window.sedona.notify = function() {
	if (!document.querySelector('.notify')) {
		return;
	}

	const element = document.querySelector('.notify');

	element.querySelector('.js-notify-close').addEventListener('click', function() {
		element.classList.remove('notify--show');
		element.classList.add('notify--hide');
	});
}

sedona.notify();
