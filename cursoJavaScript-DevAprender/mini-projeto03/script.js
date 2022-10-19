// Divisível por 3 => Fizz
// Divisível por 5 => Buzz
// Divísivel por 3 e 5 => FizzBuzz
// Não divisível por 3 ou 5 => entrada
// Não é um número => 'Não é um número'

const result = fizzBuzz(30)
console.log(result)

function fizzBuzz(number){

    // test: isNumber?
    if(typeof(number) !== 'number'){
        return 'Não é um número'
    }
    else {
        // test: FizzBuzz
        if(number % 3 === 0 && number % 5 === 0){
            return 'FizzBuzz'
        }
        else if (number % 3 === 0){
            return 'Fizz'
        }
        else if(number % 5 === 0){
            return 'Buzz'
        }
        else {
            return number
        }
    }
}