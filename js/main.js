const nav = document.querySelector('.mobile-li')
const burger = document.querySelector('.burger')
const close = document.querySelector('.close')

function openNav() {
    nav.style.display = 'flex'
    nav.style.position = 'fixed'
    burger.style.display = 'none'
    close.style.display = 'flex'
}

function closeNav() {
    nav.style.display = 'none'
    burger.style.display = 'flex'
    close.style.display = 'none'
}


