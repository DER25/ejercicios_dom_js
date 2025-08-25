// 1.1 Lista con países
const countries1 = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const ulCountries = document.createElement('ul')
countries1.forEach((country) => {
  const li = document.createElement('li')
  li.textContent = country
  ulCountries.appendChild(li)
})
document.body.appendChild(ulCountries)

// 1.2 Elimina el elemento con .fn-remove-me
const removeMe = document.querySelector('.fn-remove-me')
if (removeMe) removeMe.remove()

// 1.3 Lista de coches dentro del div con data-function="printHere"
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const ulCars = document.createElement('ul')
cars.forEach((car) => {
  const li = document.createElement('li')
  li.textContent = car
  ulCars.appendChild(li)
})
const divPrintHere = document.querySelector('[data-function="printHere"]')
divPrintHere.appendChild(ulCars)

// 1.4 Serie de divs con h4 + img
const countries2 = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

const container = document.createElement('div')
countries2.forEach((obj) => {
  const card = document.createElement('div')

  const h4 = document.createElement('h4')
  h4.textContent = obj.title

  const img = document.createElement('img')
  img.src = obj.imgUrl
  img.alt = obj.title

  // Botón para eliminar este div (punto 1.6)
  const btnRemove = document.createElement('button')
  btnRemove.textContent = 'Eliminar este'
  btnRemove.addEventListener('click', () => card.remove())

  card.appendChild(h4)
  card.appendChild(img)
  card.appendChild(btnRemove)

  container.appendChild(card)
})
document.body.appendChild(container)

// 1.5 Botón que elimina el último div de la serie
const btnRemoveLast = document.createElement('button')
btnRemoveLast.textContent = 'Eliminar último'
btnRemoveLast.addEventListener('click', () => {
  const allCards = container.querySelectorAll('div')
  if (allCards.length > 0) {
    allCards[allCards.length - 1].remove()
  }
})
document.body.appendChild(btnRemoveLast)
