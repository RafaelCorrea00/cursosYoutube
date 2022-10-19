// Criar função para mostrar os número primos

// Primos
// Compostos

// Ex: 10, 11
// PRIMO => Número divisível somente por 1 ou por ele mesmo
// 10 - 1, 2, 4, 6, 10 - Composto
// 11 - 1, 11 - Primo

// showPrimeNumbers(13)

// function showPrimeNumbers(num) {
//     let number = num
//     let numbers = []
//     for (let i = number; i >= 1; i--) {
//         if (number % i === 0) {
//             console.log(i)
//             numbers.push(i)
//         }
//     }
//     if (numbers.length > 2) {
//         console.log(`${number} não é primo`)
//     }
//     else {
//         console.log(`${number} é primo`)
//     }
// }

exibirNumerosPrimos(15)

function exibirNumerosPrimos(limite){

    for(let numero = 2; numero <= limite; numero++){
        if (numeroPrimo(numero)) console.log(numero)
    }
}

function numeroPrimo(numero){
    let ehPrimo = true

    for(let divisor = 2; divisor < numero; divisor++){
        if(numero % divisor === 0){
            return false
        }
    }
    return true
}