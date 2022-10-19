// JavaScript - Removendo Elementos

const numeros = [1, 2, 3, 4, 5, 6]

// Final
const ultimo = numeros.pop()
console.log(ultimo)

// Início
const inicio = numeros.shift()
console.log(inicio)

// Meio
const meio = numeros.splice(2, 1)
console.log(meio)

console.log(numeros)



// Outro Exemplo
const nomes = [
    'Daniel', 'Letícia', 'Diego', 'Fabiana', 'Jefferson', 'Kelly'
]

const fim = nomes.pop()
console.log(fim)

const ini = nomes.shift()
console.log(ini)

const mei = nomes.splice(3,1)
console.log(mei)


console.log(nomes)
