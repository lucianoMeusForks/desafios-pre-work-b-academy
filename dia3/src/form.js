
const $inputPerson = document.querySelector('[data-js="input-person"]');
const $exitValueDigited = document.querySelector('[data-js="exit-value-name"]');

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

$inputPerson.addEventListener('input', (el) => {
  $exitValueDigited.textContent = transformText(el.target.value)
})
