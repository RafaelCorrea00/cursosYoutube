// JavaScript - Arrow Functions

const marcas = [
    {id: 1, nome: 'HyperX'},
    {id: 2, nome: 'Logitech'}
]

const marca = marcas.find(
    marca => marca.nome === 'Logitech'
)

console.log(marca)

// Outro Exemplo
const cidades = [
    {municipio: 'Limeira', estado: 'SP'},
    {municipio: 'Poços de Caldas', estado: 'MG'},
    {municipio: 'Niterói', estado: 'RJ'},
]

const cidade = cidades.find(
    cidade => cidade.municipio === 'Niterói'
)

console.log(cidade)