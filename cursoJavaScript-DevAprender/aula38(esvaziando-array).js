// JavaScript - Esvaziando um Array

let numeros = [1, 2, 3, 4, 5, 6]
let outros = numeros
// Solução 1
// numeros = [] // tem que ser 'let' ou 'var'
// console.log(outros) // não apaga da referência

// Solução 2 - mais simples e clean
// numeros.length = 0
// console.log(numeros)
// console.log(outros)

// Solução 3
// numeros.splice(0, numeros.length)
// console.log(numeros)
// console.log(outros)

// Solução 4 - Custa muito processamento
// while (numeros.length > 0){
//     numeros.pop()
// }
// console.log(numeros)
// console.log(outros)