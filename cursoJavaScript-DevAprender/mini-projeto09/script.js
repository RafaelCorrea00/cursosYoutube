// Criar uma função que exibe a quantidade de *
// que aquela linha possui

showAsterisks(10)

function showAsterisks(lines){
    let asterisk = ''
    for(let i = 1; i <= lines; i++){
        asterisk += '*'
        console.log(asterisk)
    }

    // Outra possibilidade
    // for(let i = 0; i <= lines; i++){
    //     let asterisk = ''
    //     for(let j = 0; j <= i; j++){
    //         asterisk += '*'
    //     }
    //     console.log(asterisk)
    // }
}