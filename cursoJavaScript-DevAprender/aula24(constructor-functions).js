// Factory Function
// camelCase - umDoisTresQuatro
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log("Fazendo ligação...")
        }
    }
}

// Constructor Function
// Pascal Case - UmDoisTresQuatro
function Celular(marcaCelular, tamanhoTela, capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function(){
        console.log("Fazendo ligação...")
    }
}


// Fazendo meu prórpio construtor
const celular = new Celular('ASUS', 5.5, 5000)
console.log(celular)

function Person(name, age, height, weight) {
    this.name = name,
    this.age = age,
    this.height = height,
    this.weight = weight,
    this.walk = function(){
        console.log('walking...')
    }
}

const person1 = new Person('João', 25, 1.85, 90)
const person2 = new Person('Maria', 32, 1.65, 55)
console.log(person1)
console.log(person2)
