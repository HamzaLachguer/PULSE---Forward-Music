// caching DOM elements
// const menuBtn = document.querySelector(".menu-display-btn");
// const navContainer = document.querySelector(".nav-list-container");

// menuBtn.addEventListener('click', (e) => {
//     e.preventDefault();

//     const isMenuOpen = menuBtn.classList.toggle("close-menu");
//     navContainer.classList.toggle("open-nav-menu", isMenuOpen);

//     document.body.style.overflow = isMenuOpen? "hidden" : "auto";

//     // updating aria attributes
//     navContainer.setAttribute("aria-hidden", !isMenuOpen)
//     navContainer.setAttribute("aria-expanded", isMenuOpen)
// });

class NavigationMenu {
	constructor() {
		this.menuBtn = document.querySelector(".menu-display-btn");
		this.navContainer = document.querySelector(".nav-list-container");
		this.isMenuOpen = false;
		this.initNav();
	}

	initNav() {
		this.menuBtn.addEventListener('click', (e) => this.toggleMenu(e))
	}

	toggleMenu(e) {
		e.preventDefault();
		
		this.isMenuOpen = !this.isMenuOpen;
		this.menuBtn.classList.toggle("close-menu", this.isMenuOpen);
		this.navContainer.classList.toggle("open-nav-menu", this.isMenuOpen);
		
    document.body.style.overflow = this.isMenuOpen? "hidden" : "auto";

    // updating aria attributes
    this.navContainer.setAttribute("aria-hidden", !this.isMenuOpen);
    this.navContainer.setAttribute("aria-expanded", this.isMenuOpen);
	}
}



document.addEventListener('DOMContentLoaded', () => {
	new NavigationMenu();
})