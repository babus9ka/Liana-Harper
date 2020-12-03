let menu = document.querySelector('.adf');
let btn = document.querySelector('.toggle-btn');

btn.addEventListener('click', e => {
    e.preventDefault();
    let heightWindow = window.innerHeight;
    console.log(heightWindow)
    menu.classList.toggle('active');
    if(menu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    }
})

