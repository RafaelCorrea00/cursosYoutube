// Loop For..In
const pessoa = {
    nome: 'Jhonatan',
    idade: 25
}

// key-value
for(let chave in pessoa){
    console.log(chave, pessoa[chave])
}

const cores = ['Vermelho', 'Verde', 'Azul']
for(let indice in cores){
    console.log(indice, cores[indice])
}