document.querySelector('.menu-btn').addEventListener('click', () => { /* registra los eventos relacionados a la clase mensionada en el query selector*/
    document.querySelector('.nav-menu').classList.toggle('show'); /*Le agrega el show a la clase mencionada en queryselector*/
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.newscards', {delay: 700});
ScrollReveal().reveal('.cards-banner-one', {delay: 700});
ScrollReveal().reveal('.cards-banner-two', {delay: 700});
ScrollReveal().reveal('.social', {delay: 700});