import { headerContent } from './header.js';
import { menuContent } from "./menu.js";
import { aboutContent } from "./about.js";
import { testimonialsContent } from "./testimonials.js";

window.onload = function () {
    headerContent();

    const menuTab = this.document.createElement('li');
    menuTab.innerHTML = 'Menu';
    const testimonialsTab = this.document.createElement('li');
    testimonialsTab.innerHTML = 'Testimonials';
    const aboutTab = this.document.createElement('li');
    aboutTab.innerHTML = 'About';
    const navList = this.document.createElement('ul');
    const nav = this.document.createElement('nav');
    const contentDiv = this.document.querySelector('div#content')

    contentDiv.append(nav);
    nav.append(navList);
    navList.append(menuTab, testimonialsTab, aboutTab)

    // default page
    menuContent();

    const hide = (selector) => {
        if (document.querySelector(selector)) {

            let el = document.querySelector(selector);
            el.remove();
        }
    }

    const tabFunctionality = (tabEl, elSelector, func) => {
        tabEl.addEventListener('click', function() {
            if (document.querySelector(elSelector)) {
                return;
            }
            hide('#testimonials');
            hide('#about');
            hide('#menu');
            func();
        })
    }

    // loads selected pages on click
    tabFunctionality(menuTab, '#menu', menuContent);
    tabFunctionality(testimonialsTab, '#testimonials', testimonialsContent);
    tabFunctionality(aboutTab, '#about', aboutContent);

}