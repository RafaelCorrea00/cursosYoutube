// JavaScript - developr.mozilla.org - String

// Tipo primitivo
const mensagem = 'Minha primeira mensagem'

// Tipo objeto
const outraMensagem = new String('Bom dia!')

console.log(outraMensagem)

// tamanho da mensagem
console.log(outraMensagem.length)

// letra na posição do índice
console.log(outraMensagem[2])

// pesquisando palavra dentro da string
console.log(outraMensagem.includes('Bom'))
console.log(outraMensagem.includes('vermelho'))

// verificando se a string inicia com uma palavra específica
console.log(outraMensagem.startsWith('Bom'))
console.log(outraMensagem.startsWith('verde'))

// verificando se a string termina com uma palavra específica
console.log(outraMensagem.endsWith('dia!'))
console.log(outraMensagem.endsWith('azul'))

// descobrir qual é o índice de uma palavra
console.log(mensagem.indexOf('primeira'))

// substituir alguma palavra dentro da string
console.log(mensagem.replace('Minha', 'Sua'))

// removendo espaço a mais do inícios e fim da string
const novaMensagem = '                               string                     '
console.log(novaMensagem)
console.log(novaMensagem.trim())

// dividindo a string por letras e palavras
console.log(mensagem.split(''))
console.log(mensagem.split(' '))