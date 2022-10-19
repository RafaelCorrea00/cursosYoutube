// JavaScript - Faixa de Preço (Exercício)

// Crie um array de objetos de faixa de preço
// para que ele possa ser usado em um site igual o mercado livre

// faixas, tooltip, mínimo, máximo

// Primeira Opção
let faixas1 = [
    {
        tooltip: 'Até R$1000',
        minimo: 0,
        maximo: 1000,
    },
    {
        tooltip: 'R$1000 a R$2000',
        minimo: 1000,
        maximo: 2000,
    },
    {
        tooltip: 'R$2000 a R$3000',
        minimo: 2000,
        maximo: 3000,
    }
]
console.log(faixas1)


// Segunda Opção (Factory Function)
function criaFaixaPreco(tooltip, minimo, maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criaFaixaPreco('Até R$500', 0, 500),
    criaFaixaPreco('R$1500 até R$2500', 1500, 2500),
    criaFaixaPreco('R$2500 Até R$3500', 2500, 3500)
]

console.log(faixas2)

// Terceira Opção (Constructor Function)
function FaixaPreco(tooltip, minimo, maximo) {
    this.tooltip = tooltip
    this.minimo = minimo
    this.maximo = maximo
}

let faixa3 = [
    new FaixaPreco('Até R$1699', 0, 1699),
    new FaixaPreco('R$2599 até R$3999', 2599, 3999),
    new FaixaPreco('R$3999 até R$5999', 3999, 5999)
]

console.log(faixa3)