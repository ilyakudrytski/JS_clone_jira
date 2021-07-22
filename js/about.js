const aboutBtn = document.querySelector('.about');
const modalAbout = document.querySelector('.about-block');

aboutBtn.addEventListener('click', (event) => {
    modalAbout.classList.remove('hide');

})

document.addEventListener('click', e => {

    const target = e.target
    const popupForm = target.closest('.about')

    if (!popupForm && target.className !== 'about-block-content') {
        console.log(aboutBtn, target)
        modalAbout.classList.add('hide');
    }

})