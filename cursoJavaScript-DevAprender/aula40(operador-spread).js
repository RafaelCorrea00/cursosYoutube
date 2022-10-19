// JavaScript - Operador Spread

const primeiro = [1, 2, 3]
const segundo = [4, 5, 6]

// const combinado = primeiro.concat(segundo)
// const cortado = combinado.slice()

// spread
const combinado = [...primeiro, 'a', ...segundo, '#']
const clonado = [...combinado]

console.log(combinado)
console.log(clonado)

// Outro Exemplo
const numerosA = [1, 2, 3]
const numerosB = [4, 5, 6]
const numeros = [...numerosA, '%', ...numerosB]
console.log(numeros)