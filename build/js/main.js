document.addEventListener("DOMContentLoaded", function () {
	const bodyEl = document.body;
	const menuToggle = document.querySelector('#menu-toggle');
	const mobileMenu = document.querySelector('#mobile-menu');
	
	/*===============MOBILE MENU ==================*/
	if (menuToggle) {
		 
		menuToggle.addEventListener('click', ()=> {
			
			if (menuToggle.classList.contains('active')) {
				menuToggle.classList.remove('active');
			    mobileMenu.classList.remove('active');
				bodyEl.classList.remove('lock');
			
			} else {
				menuToggle.classList.add('active');
			    mobileMenu.classList.add('active');
				bodyEl.classList.add('lock');
				
			}
		});
		mobileMenu.addEventListener('click', (e)=> {
			console.log('777');
		if(!e.target.closest('.header-city')){
			
			menuToggle.classList.remove('active');
			mobileMenu.classList.remove('active');
			bodyEl.classList.remove('lock');
		}else{
			return
		}
		});
	
	}
	/*=======INPUT FAKE PLACEHOLDER ========= */
	const formItems = document.querySelectorAll('.form-item');
	const formItemsInputs = document.querySelectorAll('.form-input');
	
	if(formItems.length > 0){

		for(let item of formItems){
			const itemInput = item.querySelector('.form-input');
			const fakePlaceholder = item.querySelector('.fake-placeholder');
			itemInput.addEventListener('focus', function(){
				fakePlaceholder.classList.add('active');
			});
			
			itemInput.addEventListener('blur', function(){
				if(this.value.length == 0){
					fakePlaceholder.classList.remove('active');
				}
			});
			if(itemInput.value.length > 0){
				fakePlaceholder.classList.add('active');
			}
			
		}
	}

	/*************custom-select************ */
	
	document.querySelectorAll('.custom-select-wrapper').forEach(wrapper => {
	wrapper.addEventListener('click', function() {
		this.querySelector('.custom-select').classList.toggle('open');
	});
	});

	// Добавление обработчика клика для всех .custom-option
	document.querySelectorAll(".custom-option").forEach(option => {
	option.addEventListener('click', function() {
		let selected = this.parentNode.querySelector('.custom-option.selected');
		if (selected) {
		selected.classList.remove('selected');
		}
		this.classList.add('selected');
		this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
	});
	});

	// Закрытие всех .custom-select, если клик был снаружи
	window.addEventListener('click', function(e) {
		document.querySelectorAll('.custom-select').forEach(select => {
			if (!select.contains(e.target)) {
			select.classList.remove('open');
			}
		});
	});

	/* ======== modal  ===============*/
	const modalFramesOpen = document.querySelectorAll('[frame-btn]');
	const modalFrames = document.querySelectorAll('[frame-modal]');
	if (modalFrames.length > 0) {
		const modalFramesClose = document.querySelectorAll('[frame-close]');

		for (let item of modalFramesOpen) {
			item.addEventListener('click', function (e) {
				for (let item of modalFrames) {
					item.classList.remove('visible');

					bodyEl.classList.remove('lock');
				}
				e.preventDefault();
				const itemAttr = item.getAttribute('frame-btn');

				for (let frame of modalFrames) {
					const frameAttr = frame.getAttribute('frame-modal');
					if (frameAttr == itemAttr) {
						frame.classList.add('visible');
						bodyEl.classList.add('lock');

					}
				}
			});
		}
		/*==  закрыть модалки  frame-modal ======*/
		for (let item of modalFramesClose) {
			item.addEventListener('click', function (e) {
				e.preventDefault();
				item.closest('[frame-modal]').classList.remove('visible');
				bodyEl.classList.remove('lock');
			});
		}
		/*=============== закрыть модалки по клику вне ===============*/
		for (let frame of modalFrames) {
			frame.addEventListener('click', function (e) {
				if (e.target === e.currentTarget) {
					this.classList.remove(`visible`);
					bodyEl.classList.remove('lock');
				}
			});
		}
	}
});