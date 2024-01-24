const toggleBtn = document.querySelector('.toggle-btn')
toggleBtn.addEventListener('click', function () {
  const openMenu = document.querySelector('.fa-bars')
  const closeMenu = document.querySelector('.fa-xmark')
  const aside = document.querySelector('.aside')
  openMenu.classList.toggle('hide')
  closeMenu.classList.toggle('hide')
  aside.classList.toggle('hide')
})
