const acceptCookiesButton = document.querySelector('.cookies-accept');
const cookiesSection = document.querySelector('.cookies');

acceptCookiesButton.addEventListener('click', event => {
	event.preventDefault();
	cookiesSection.classList.add('hidden');
});
