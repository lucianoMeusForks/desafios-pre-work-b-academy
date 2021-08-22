
import { $, $all, $create } from './utils'

function getFormValue (fields){
  return Array.prototype.reduce.call(fields,
    function (acc, element) {
      acc.push({
        type: element.dataset.js,
        value: element.value
      })

      return acc
    }
  , [])
}

function createImage (value) {
  const td = $create('td')
  const img = $create('img')
  img.src = value
  img.width = 100
  td.appendChild(img)
  return td
}

function createText (value) {
  const td = $create('td')
  td.textContent = value
  return td
}

function createColor (value) {
  const td = $create('td')
  const div = $create('div')
  div.classList.add('boxcolor-car')
  div.style.setProperty('--boxcolor-car-bgc', value)
  td.appendChild(div)
  return td
}

function createRow () {
  const fields = $all('[data-js="formcar"] input')
  const dataForm = getFormValue(fields)
  const tr = $create('tr')

  for (const row of dataForm) {
    const { type, value } = row
    tr.appendChild(createItems[type](value))
  }

  return tr

}

const createItems = {
  typetxt: (text) => createText(text),
  typeimage: (pathImg) => createImage(pathImg),
  typecolor: (color) => createColor(color)
}

$('[data-js="formcar"]').addEventListener('submit', (e) => {
  e.preventDefault()
  const fields = $all('[data-js="formcar"] input')
  const firtsInput = fields[0]
  const table = $('[data-js="table')

  table.appendChild(createRow())

  e.target.reset()
  firtsInput.focus()
})



