// JavaScript - Natureza dinâmica de Objetos

const mouse = {
    cor: 'red',
    marca: 'dazz'
}

mouse.velocidade = 5000
mouse.trocarDPI = function(){
    console.log('mudando DPI')
}

delete mouse.velocidade

console.log(mouse)
