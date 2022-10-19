// Exercício Nota Escolar
// Obter a Média a partir de um array

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: D
// 90-100: A

const scholarGrades = [70, 70, 80]

console.log(scholarAverage(scholarGrades))

function scholarAverage(scholarGrades) {

    let average = calculateAverage(scholarGrades)

    if (average < 0 || average > 100) {
        return 'Média Inválida'
    } else {

        if (average >= 90) {
            return 'Média Final: A'
        }
        else if (average >= 80) {
            return 'Média Final: B'
        }
        else if (average >= 70) {
            return 'Média Final: C'
        }
        else if (average >= 60) {
            return 'Média Final: D'
        }
        else {
            return 'Média Final: E'
        }
    }
}

function calculateAverage(array) {
    let grades = 0

    for (let value of array) {
        grades += Number(value)
    }

    return Math.ceil(grades / array.length)
}