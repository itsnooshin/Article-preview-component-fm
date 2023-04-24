'use strict'
// selecting the elements
const btnShare = document.querySelector('.button-share-icon')
const profile = document.querySelector('.information-footer')
const footer = document.querySelector('.container-footer')
const information = document.querySelector('.information-footer')
const svgIcon = document.querySelector('.img-svg path')
const hidden = document.querySelector('.hidden')
const hidde = document.querySelector('.conatiner__hidd')
btnShare.addEventListener('click', function () {
  hidde.classList.toggle('visible')
  footer.classList.toggle('visible')
  // for hide
  information.classList.toggle('hide')
})
