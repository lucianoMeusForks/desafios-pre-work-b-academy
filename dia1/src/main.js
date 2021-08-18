import './style.css'

const $app = document.querySelector('[data-js="app"]')
const $btnLink = document.querySelector('[data-js="btnLink"]')

$app.innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`

$btnLink.addEventListener('click', (evt) => {
  evt.preventDefault()
  $app.classList.toggle('hidden')

  // Apresenta texto dependendo da classe
  $app.classList.contains('hidden')
    ? evt.target.innerHTML = 'Ver mensagem'
    : evt.target.innerHTML = 'Esconder mensagem'
})
