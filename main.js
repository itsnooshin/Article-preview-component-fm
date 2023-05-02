'use strict'
const btnShare = document.querySelector('.btn-share-icon')
const social = document.querySelector('.socials')

btnShare.addEventListener('click', function (e) {
  e.preventDefault()
  social.classList.toggle('show')
  social.classList.toggle('hide')
})

btnHide.addEventListener('click', function (e) {
  social.classList.toggle('show')
  btnShare.classList.toggle('.hide')
})
