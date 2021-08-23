import { $, $all, $create } from './utils'

const BASE_URL = 'http://localhost:3333/cars'
const createItems = {
  typetxt: (text) => createText(text),
  typeimage: (pathImg) => createImage(pathImg),
  typecolor: (color) => createColor(color)
}

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

function createRow (data) {
  const tr = $create('tr')
  for (const row of data) {
    const { type, value } = row
    tr.appendChild(createItems[type](value))
  }

  return tr

}

function createRowReq(data) {
  const tr = $create('tr')

  debugger
  tr.appendChild(td)

  return tr
}



$('[data-js="formcar"]').addEventListener('submit', (e) => {
  e.preventDefault()
  const fields = $all('[data-js="formcar"] input')
  const firtsInput = fields[0]
  const table = $('[data-js="table')

  table.appendChild(createRow(getFormValue(fields)))

  e.target.reset()
  firtsInput.focus()
})
//
// function post() {
//   fetch(BASE_URL, {
//     method: 'post',
//     headers: { 'content-type': 'application/json' },
//     body: JSON.stringify({
//       image: 'https://placeimg.com/100/100/any',
//       brandModel: 'Vectra',
//       year: parseInt('1988'),
//       plate: 'a19875',
//       color: 'red'
//     })
//   })
//    .then((response) => response.json())
//    .then((response) => console.log(response))
// }

function get() {
  fetch(BASE_URL)
   .then((response) => response.json())
   .then((response) => createRowReq(response))
}

function main() {
  get()
}

main()
