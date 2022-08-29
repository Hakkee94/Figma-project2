'use strict'
let hotelImgs = [
    'url("img/hotel.png")',
    'url("img/hotel2.jpeg")',
    'url("img/hotel3.jpeg")',
    'url("img/hotel4.jpeg")',
    'url("img/hotel5.jpeg")',
]

let timeImgs = [
    'url("img/time1.png")',
    'url("img/time2.jpeg")',
    'url("img/time3.jpeg")',
    'url("img/time4.jpeg")',
    'url("img/time5.jpeg")',
]


const menuBurger = document.querySelector('.burger')
const navBar = document.querySelector('.mobile-nav-bar')
const closeBtn = document.querySelector('.cancel')

const slideBtns = document.querySelectorAll('.slide-button')
const hotelImg = document.querySelector('.hotel')

const slideTimeBtns = document.querySelectorAll('.slide-button-watch')
const timeImg = document.querySelector('.background-time')


const chooseSlide = (index) => {
    const image = hotelImgs[index]
    hotelImg.style.backgroundImage = image
}

const chooseSlideTime = (index) => {
    const imageTime = timeImgs[index]
    timeImg.style.backgroundImage = imageTime
}


slideBtns.forEach((elem, index) => {
    elem.addEventListener('click', () => chooseSlide(index))
})


slideTimeBtns.forEach((element, index) => {
    element.addEventListener('click', () => chooseSlideTime(index))
})

menuBurger.addEventListener('click', () => navBar.style.display = 'block')
closeBtn.addEventListener('click', () => navBar.style.display = 'none')

