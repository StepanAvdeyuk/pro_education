'use strict';

window.addEventListener('DOMContentLoaded', () => { 

    const burger = document.querySelector('.header__burger');
    const sideNav = document.querySelector('.header__sidemenu');
    // const sideNavClose = document.querySelector('.header__sidenav-close');
    const sideNavA = document.querySelectorAll('.header__sidemenu a');

    burger.addEventListener('click', () => {
        sideNav.classList.add('active');
        document.body.style.overflow = "hidden";
    })
    // sideNavClose.addEventListener('click', () => {
    //     sideNav.classList.remove('active');
    //     document.body.style.overflow = "";
    // })
    sideNavA.forEach(item => {
        item.addEventListener('click', () => {
            sideNav.classList.remove('active');
            document.body.style.overflow = "";
        })
    })

   


});