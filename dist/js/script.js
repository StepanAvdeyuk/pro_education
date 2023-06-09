'use strict';

window.addEventListener('DOMContentLoaded', () => { 

    const burger = document.querySelector('.header__burger');

    const sideNav = document.querySelector('.header__sidemenu');
    // const sideNavClose = document.querySelector('.header__sidenav-close');
    const sideNavA = document.querySelectorAll('.header__sidemenu a');

    burger?.addEventListener('click', () => {
        sideNav.classList.add('active');
        document.body.style.overflow = "hidden";
    })
    
    // sideNavClose.addEventListener('click', () => {
    //     sideNav.classList.remove('active');
    //     document.body.style.overflow = "";
    // })
    sideNavA?.forEach(item => {
        item.addEventListener('click', () => {
            sideNav.classList.remove('active');
            document.body.style.overflow = "";
        })
    })

    const btnPopup = document.querySelector('.about__btn button');
    const popupWrapper = document.querySelector('.form__wrapper');
    const btn2Popup = document.querySelector('.license__btn button');
    const btn3Popup = document.querySelector('.connect__btn');
    const popupClose = document.querySelector('.form__close');
    const form = document.querySelector('.form form');
    const headerPhone = document.querySelector('.header__phone-text');
    const footerPhone = document.querySelector('.footer__phone-text');

    btnPopup?.addEventListener('click', (e) => {
        e.preventDefault();
        popupWrapper.classList.add('active');
    })

    headerPhone?.addEventListener('click', (e) => {
        e.preventDefault();
        popupWrapper.classList.add('active');
    })

    btn2Popup?.addEventListener('click', (e) => {
        e.preventDefault();
        popupWrapper.classList.add('active');
    })

    btn3Popup?.addEventListener('click', (e) => {
        e.preventDefault();
        popupWrapper.classList.add('active');
    })

    footerPhone?.addEventListener('click', (e) => {
        e.preventDefault();
        popupWrapper.classList.add('active');
    })


    popupClose?.addEventListener('click', (e) => {
        e.preventDefault();
        popupWrapper.classList.remove('active');
    })

    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        // popupWrapper.classList.remove('active');
    })


    const phoneNumberInput = document.getElementById('phoneInput');

    phoneNumberInput.addEventListener('input', function() {
        const inputValue = phoneNumberInput.value;
        const numericValue = inputValue.replace(/\D/g, '');
        const maskedValue = '+' + numericValue;
        phoneNumberInput.value = maskedValue;
    });

});