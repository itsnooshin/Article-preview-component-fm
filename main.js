'use strict'

const btnShare = document.querySelector('.btn-share')
const profile = document.querySelector('.information-footer')
const footer = document.querySelector('.container-footer')
const information = document.querySelector('.information-footer')
const svgIcon = document.querySelector('.img-svg path')
const hiddenContainer = document.querySelector('.conatiner__hidd')
const social = document.querySelector('.socials')


btnShare.addEventListener('click', function (e) {
  e.preventDefault()
  social.classList.toggle('show')
  information.classList.toggle('hide')
  footer.classList.toggle('show')


})
