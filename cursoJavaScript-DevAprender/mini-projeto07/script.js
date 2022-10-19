// Criar função somar que retorna a
// soma de todos os múltiplos de 3 e 5

sumMultiple(10)

function sumMultiple(limit) {
    let multiple3 = 0
    let multiple5 = 0
    let total = 0

    for (let i = 0; i <= limit; i++) {
        if (i % 3 === 0) {
            multiple3 += i
        }

        if (i % 5 === 0) {
            multiple5 += i
        }
    }

    total = multiple3 + multiple5

    console.log('Resultado da soma entre os\nmúltiplos de 3 e os múltiplos de 5: ', total)
}