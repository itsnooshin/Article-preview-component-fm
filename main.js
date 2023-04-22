'use strict'
// selecting the elements
const btnShare = document.querySelector('.button-share-icon')
const profile = document.querySelector('.information-footer')
const footer = document.querySelector('.container-footer')
const information = document.querySelector('.information-footer')
const svgIcon = document.querySelector('.img-svg path')
const hidden = document.querySelector('.hidden')
const hidde = document.querySelector('.conatiner__hidd')

// const body = (document.body.style.minWidth = '300px')
hidde.style.display = 'block'
btnShare.addEventListener('click', function () {
  footer.style.background = '#48556A'
  information.style.display = 'none'
  hidde.style.display = 'block'
  btnShare.style.background = '#6E8098'
  svgIcon.style.fill = '#fff'
})
