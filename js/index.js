'use strict'
let popup = document.querySelector('.popup');
let sliderDotColl = [...document.querySelectorAll(".slider__dot")];
let imageColl = [...document.querySelectorAll(".slider__item")];

document.querySelector('.adress_button').addEventListener('click', () => {
  popup.classList.remove('hidden');
});
document.querySelector('.measurement_button').addEventListener('click', () => {
  popup.classList.remove('hidden');
})
document.querySelector('.popup__close').addEventListener('click', () => {
  popup.classList.add('hidden');
});



function clickImage(num) {
  imageColl[num].classList.add('active')
};

sliderDotColl.forEach((i, ind) => {
  i.onclick = () => {
    i.closest('.circle_box').querySelector('circle[fill$="19b5ff"]').setAttribute('fill', "#908f8d");
    i.querySelector('[fill]').setAttribute('fill', "#19b5ff");
    document.querySelector(".active").classList.remove("active");
    clickImage(ind)
  }
})