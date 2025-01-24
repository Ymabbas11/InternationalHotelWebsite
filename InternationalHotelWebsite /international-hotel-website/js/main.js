const menu_btn = document.querySelector('.menu_btn');
const mobile_meun = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function(){
	menu_btn.classList.toggle('is-active');
	mobile_meun.classList.toggle('is-active');
});