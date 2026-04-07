
let btnMenu = document.getElementById('btn-menu')
let btnClose = document.getElementById('btn-close')
let navMobile = document.getElementById('nav-mobile')

btnMenu.addEventListener('click', () =>{
    navMobile.classList.remove('hidden')
    btnMenu.classList.add('hidden')
    btnClose.classList.remove('hidden')
})

btnClose.addEventListener('click', () =>{
    navMobile.classList.add('hidden')
    btnClose.classList.add('hidden')
    btnMenu.classList.remove('hidden')
})