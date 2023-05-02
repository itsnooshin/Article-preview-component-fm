'use strict'

const btnShare = document.querySelector('.btn-share-icon')
const profile = document.querySelector('.information-footer')
const footer = document.querySelector('.container-footer')
const information = document.querySelector('.information')
const svgIcon = document.querySelector('.img-svg path')
const hiddenContainer = document.querySelector('.conatiner__hidd')
const social = document.querySelector('.socials')
const infoel = document.querySelector('.container-info')
const btnHide = document.querySelector('.btn-share-hide')
btnShare.addEventListener('click', function (e) {
  e.preventDefault()
  social.classList.toggle('show')
  social.classList.toggle('hide')
})

btnHide.addEventListener('click', function (e) {
  social.classList.toggle('show')
  btnShare.classList.toggle('.hide')
})
