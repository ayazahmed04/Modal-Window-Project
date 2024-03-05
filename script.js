'use strict'

const modal = document.querySelector('.modal')
const overLay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsShowModal = document.querySelectorAll('.show-modal')
console.log(btnsShowModal)

// Open Modal function
const openModal = () => {
  modal.classList.remove('hidden')
  overLay.classList.remove('hidden')
}

// close modal function
const closeModal = () => {
  modal.classList.add('hidden')
  overLay.classList.add('hidden')
}

// Close modal
btnCloseModal.addEventListener('click', closeModal)
overLay.addEventListener('click', closeModal)

// Open modal
for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', openModal)
}

// Close modal with Esc key

document.addEventListener('keydown', pressedKey => {
  console.log(pressedKey.key)
  if (pressedKey.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal()
  }
})
