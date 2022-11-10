const buttonCloseMenu = document.querySelector('.buttonCloseMenu')

buttonCloseMenu.addEventListener('click', closeMenu)

function menuOpen() {
  document.body.classList.add('menuExpande')
}

function closeMenu() {
  document.body.classList.remove('menuExpande')
}
