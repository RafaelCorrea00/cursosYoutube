// JavaScript - Encontrando Elementos (Primitivos)

const numeros = [1, 2, 3, 1, 4]

// Busca o valor dentro do array e retorna seu índice
console.log(numeros.indexOf(2))

// Se o valour existe ou não no array | true or false
console.log(numeros.indexOf(3) !== -1)
console.log(numeros.includes(8))

// Busca a última ocorrência do valor dentro do array e retorna seu índice
console.log(numeros.lastIndexOf(1))


// Outro Exemplo
const nomes = [
    'José',
    'João',
    'Maria',
    'João'
]

console.log(
    'Qual é o índice do nome "João"? Índice',
    nomes.indexOf('João')
)
console.log(
    'Qual é o última ocorrência do nome "João"? Índice',
    nomes.lastIndexOf('João')
)
console.log(
    'Existe o nome "Antônio" na lista?',
    nomes.includes('Antônio') === true? 'Sim': 'Não'
)



