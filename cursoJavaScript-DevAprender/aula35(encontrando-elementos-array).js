// JavaScript - Encontrando Elementos (Tipos de Referência)

const marcas = [
    {
        id: 1,
        nome: 'Nike'
    },
    {
        id: 2,
        nome: 'Adidas'
    },
]

const marca = marcas.find(function(marca){
    return marca.nome === 'Nike'
})
console.log(marca)


// Outro Exemplo
const carros = [
    {marca: 'Ford', modelo: 'Mustang'},
    {marca: 'Ferrari', modelo: 'F-40'},
    {marca: 'BWM', modelo: 'Z4'},
    {marca: 'Mercedes', modelo: 'AMG 45'},
    {marca: 'Porsche', modelo: '911'}
]

const carro = carros.find(
    function(carro){
        return carro.modelo === 'Z4'
    }
)

console.log(carro)