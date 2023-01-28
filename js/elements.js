const buttonCloseHome = document.querySelector('.buttonCloseHome')
const buttonCloseUniverse = document.querySelector('.buttonCloseUniverse')
const buttonCloseExplorer = document.querySelector('.buttonCloseExplorer')

buttonCloseHome.addEventListener('click', closeMenu)
buttonCloseUniverse.addEventListener('click', closeMenu)
buttonCloseExplorer.addEventListener('click', closeMenu)

function menuOpen() {
  document.body.classList.add('menuExpande')
}

function closeMenu() {
  document.body.classList.remove('menuExpande')
}
