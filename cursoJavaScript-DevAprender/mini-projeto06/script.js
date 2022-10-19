// Criar um método para ler propriedades de um objeto e
// exibir as propriedades do tipo string que estão nesse objeto

const film = {
    title: 'Avengers: Infinity War',
    year: 2018,
    director: 'Anthony Russo & Joe Russo',
    character: 'Thor'
}

exposeProperties(film)

function exposeProperties(object) {
    for(let i in object){
        if(typeof(object[i]) === 'string'){
            console.log(`${i}: ${object[i]}`)
        }
    }
}