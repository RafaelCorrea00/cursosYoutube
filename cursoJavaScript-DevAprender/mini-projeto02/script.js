// Escreva uma função que usa 2 números e retorna o maior entre eles

let valorMaior = max(10, 10)
console.log(valorMaior)

function max(numero1, numero2) {
    if (numero1 > numero2) {
        return 'O maior número é: ' + numero1
    } else if (numero2 > numero1) {
        return 'O maior número é: ' + numero2
    } else {
        return 'Os números são iguais'
    }
}

// function max(numero1, numero2) {
//     numero1 > numero2 ? numero1 : numero2
// }

