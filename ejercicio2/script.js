// 2.1 Inserta dinamicamente en un html un div vacío
const divVacio = document.createElement('div')
document.body.appendChild(divVacio)

// 2.2 Inserta dinamicamente en un html un div que contenga una p
const divConP = document.createElement('div')
const pDentroDiv = document.createElement('p')
pDentroDiv.textContent = 'P dentro del div'
divConP.appendChild(pDentroDiv)
document.body.appendChild(divConP)

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p usando loop
const div6p = document.createElement('div')
for (let i = 1; i <= 6; i++) {
  const p = document.createElement('p')
  p.textContent = `Párrafo ${i}`
  div6p.appendChild(p)
}
document.body.appendChild(div6p)

// 2.4 Inserta dinamicamente una p con el texto 'Soy dinámico!'
const pDinamico = document.createElement('p')
pDinamico.textContent = 'Soy dinámico!'
document.body.appendChild(pDinamico)

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'
const h2Insert = document.querySelector('h2.fn-insert-here')
h2Insert.textContent = 'Wubba Lubba dub dub'

// 2.6 Basado en el array, crea lista ul > li
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ul = document.createElement('ul')
apps.forEach((app) => {
  const li = document.createElement('li')
  li.textContent = app
  ul.appendChild(li)
})
document.body.appendChild(ul)

// 2.7 Elimina todos los nodos con clase .fn-remove-me
document.querySelectorAll('.fn-remove-me').forEach((el) => el.remove())

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos primeros div
const divs = document.querySelectorAll('div')
const pEnMedio = document.createElement('p')
pEnMedio.textContent = 'Voy en medio!'
divs[0].insertAdjacentElement('afterend', pEnMedio)

// 2.9 Inserta p con el texto 'Voy dentro!' dentro de todos los div con .fn-insert-here
document.querySelectorAll('div.fn-insert-here').forEach((div) => {
  const pDentro = document.createElement('p')
  pDentro.textContent = 'Voy dentro!'
  div.appendChild(pDentro)
})
