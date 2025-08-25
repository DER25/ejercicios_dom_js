// 1.1 Evento click que muestra la info del evento
const btn = document.querySelector('#btnToClick')
btn.addEventListener('click', (event) => {
  console.log('Información del evento click:', event)
})

// 1.2 Evento 'focus' para mostrar el valor del input con clase .focus
const inputFocus = document.querySelector('.focus')
inputFocus.addEventListener('focus', (event) => {
  console.log('Valor del input (focus):', event.target.value)
})

// 1.3 Evento 'input' para mostrar el valor del input con clase .value
const inputValue = document.querySelector('.value')
inputValue.addEventListener('input', (event) => {
  console.log('Valor actual del input:', event.target.value)
})

// Lista de albums
const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
]

// Crear y añadir lista UL > LI con los albums
const ulAlbums = document.createElement('ul')
albums.forEach((album) => {
  const li = document.createElement('li')
  li.textContent = album
  ulAlbums.appendChild(li)
})
document.body.appendChild(ulAlbums)
