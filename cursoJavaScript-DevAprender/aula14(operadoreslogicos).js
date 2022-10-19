// Operador Lógico E (&&)
// Retornar TRUE se os dois operandos forem true

// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// let maiorDeIdade = true
// let possuiCarteiraDeTrabalho = true
// let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho

// console.log(podeAplicar)


// Operador Lógico OU (||)
// Retornar TRUE se um dos operandos for TRUE

// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// let maiorDeIdade = false
// let possuiCarteiraDeTrabalho = true
// let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho

// console.log(podeAplicar)


// Operador Lógico NOT (!)

let maiorDeIdade = false
let possuiCarteiraDeTrabalho = false
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho

console.log('Pode aplicar:', podeAplicar)

let candidatoRecusado = !podeAplicar
console.log('Candidato Recusado:', candidatoRecusado)