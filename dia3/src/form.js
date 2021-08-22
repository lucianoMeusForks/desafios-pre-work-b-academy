
import { $ } from './utils'

const $inputPerson = $('[data-js="input-person"]')
const $selectColor = $('[data-js="color-select"]')

function toUpperFirstCharAt (text) {
  return `${text.charAt(0).toUpperCase()}${text.slice(1)}`
}

function transformText (value) {
  const ignoredWords = ["de", "da", "do", "dos", "das"];
  const textDigited = value.toLowerCase().split(' ')

  return textDigited.map((text) => {
    return ignoredWords.includes(text)
      ? text
      : toUpperFirstCharAt(text)
  }).toString().replaceAll(',', ' ')
}

function showText (el) {
  const $exitValueDigited = $('[data-js="exit-value-name"]')
  $exitValueDigited.textContent = transformText(el.target.value)
}

function hasNotSquare(colorSelected) {
  const boxColors = Array.from(document.querySelectorAll('[data-js-namecolor]'))

  if (boxColors.length === 0) return false

  return boxColors.some((box) => box.getAttribute('data-js-namecolor') === colorSelected )
}

function createSquare (color) {
  const $squareColor = document.createElement('div')
  const $btnRemoveColor = document.createElement('button')
  const $boxColor = document.createElement('div')
  const $exitColors = $('[data-js="exit-colors"]')

  // Box color
  $boxColor.setAttribute('data-js-namecolor', color)
  $boxColor.classList.add('box-color')

  // Box color square
  $squareColor.classList.add('box-color__square')
  $squareColor.style.setProperty('--square-color-bg', color)

  // Box color btn
  $btnRemoveColor.setAttribute('type', 'button')
  $btnRemoveColor.classList.add('btn')
  $btnRemoveColor.classList.add('box-color__btn')
  $btnRemoveColor.textContent = 'excluir'

  // Remove box div
  $btnRemoveColor.addEventListener('click', function (e) {
    e.preventDefault()
    e.target.parentElement.remove()
  })

  $boxColor.appendChild($squareColor)
  $boxColor.appendChild($btnRemoveColor)
  $exitColors.appendChild($boxColor)
}

$inputPerson.addEventListener('input', showText)

$selectColor.addEventListener('change', function (e) {
  const optSelected = this.selectedOptions[0].value;

  if (!hasNotSquare(optSelected)) {
    createSquare(optSelected)
  }
})
