let tab = function () {
	let tabNav = document.querySelectorAll('.tabs-nav__row'),
		tabContent = document.querySelectorAll('.tab'),
		tabArrow = document.querySelectorAll('.tabs-nav__arrow'),
		tabName;

	tabNav.forEach(item => {
		item.addEventListener('click', selectTabNav)
	});

	function selectTabNav() {
		tabNav.forEach(item => {
			item.classList.remove('is-active')
		});
		this.classList.add('is-active');
		tabName = this.getAttribute('data-tab-name');
		selectTabContent(tabName);
		selectTabArrow(tabName);
	}

	function selectTabContent(tabName) {
		tabContent.forEach(item => {
			item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
		})
	}

	function selectTabArrow(tabName) {
		tabArrow.forEach(item => {
			item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
		})
	}
};

tab();
