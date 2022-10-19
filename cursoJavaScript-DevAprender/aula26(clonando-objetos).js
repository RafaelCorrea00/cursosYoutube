const celular = {
    marcaCelular: 'ASUS',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75
    },
    ligar: function (){
        console.log('Fazendo ligação...')
    }
}

// Clonando um objeto e adicionando propriedades
const novoObjeto1 = Object.assign({
    bateria: 5000
}, celular)
console.log(novoObjeto1)

// outra maneira de clonar um objeto
const novoObjeto2 = {...celular}
console.log(novoObjeto2)