// 1.1 Botón con la clase .showme
const botonShowMe = document.querySelector('.showme')
console.log(botonShowMe)

// 1.2 h1 con el id #pillado
const h1Pillado = document.querySelector('#pillado')
console.log(h1Pillado)

// 1.3 Todos los <p>
const parrafos = document.querySelectorAll('p')
console.log(parrafos)

// 1.4 Todos los elementos con la clase .pokemon
const pokemons = document.querySelectorAll('.pokemon')
console.log(pokemons)

// 1.5 Todos los elementos con el atributo data-function="testMe"
const testMeElements = document.querySelectorAll('[data-function="testMe"]')
console.log(testMeElements)

// 1.6 El 3er personaje con data-function="testMe"
const tercerPersonaje = testMeElements[2]
console.log(tercerPersonaje)
