function $ (element) {
  return document.querySelector(element)
}

function $all (element) {
  return document.querySelectorAll(element)
}

function $create (element) {
  return document.createElement(element)
}

export { $, $all, $create }
