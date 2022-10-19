// Date

const data1 = new Date()
const data2 = new Date('March 06 2019 09:30')
const data3 = new Date(2019, 02, 06, 9, 30)

console.log(data1)
console.log(data2)
console.log(data3)

// alterando o ano
data3.setFullYear(2030)
console.log(data3)

// conventendo a data para string
console.log(data2.toDateString())
console.log(data2.toDateString())

// zona temporal
console.log(data2.toTimeString())

// informação para o banco de dados
console.log(data1.toISOString())