// JavaScript - Adicionando Elementos em um Array

const numeros = [1, 2, 3]

// Início 
numeros.unshift(7)

// Meio
numeros.splice(2, 0, 'a')

// Fim
numeros.push(5)
console.log(numeros)


// Outro Exemplo
const nomes = [
    'José',
    'João',
    'Maria'
]

nomes.unshift('Tatiane')
nomes.splice(2, 0, 'Otávio')
nomes.push('Milena')

console.log(nomes)