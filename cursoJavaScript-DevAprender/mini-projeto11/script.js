// JavaScript - Objeto Endereço

// Criar um objeto endereço que contém:
// Rua
// Cidade
// CEP
// exibirEndereço(endereço)

// const address = {
//     street: 'Rua 25 de Março, n° 1234',
//     city: 'São Paulo',
//     zipcode: '12345-678',
//     showAddress: function() {
//         console.log(
//             `Rua: ${this.street}\nCidade: ${this.city}\nCEP: ${this.zipcode}`
//         )
//     }
// }

// console.log(address)
// address.showAddress()

let endereco = {
    rua: 'Tiradentes',
    cidade: 'São Paulo',
    cep: '12345-678',
}

function exibirEndereco(endereco) {
    for(let chave in endereco){
        console.log(`${chave.toUpperCase()}: ${endereco[chave]}`)
    }
}

exibirEndereco(endereco)