// JavaScript - Combinando e Cortando Arrays

const primeiro = [1, 2, 3]
const segundo = [4, 5, 6]

// Combinar
const combinado = primeiro.concat(segundo)
console.log(combinado)

// Dividir
const cortado = combinado.slice(1, 3)
console.log(cortado)


// Outro Exemplo
const sequencia1 = ['a', 'b', 'c']
const sequencia2 = ['d', 'e', 'f']

const combine = sequencia1.concat(sequencia2)
console.log(combine)

const corte = combine.slice(3, 5)
console.log(corte)