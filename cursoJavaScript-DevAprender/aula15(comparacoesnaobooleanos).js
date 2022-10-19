// Falsy
// undefined, null, 0, false, '', NaN - Not a Number

// Truthy
// true
// false || 'string', false || number

console.log(false || 'Rafael')
console.log(false || 16)


let corPersonalizada = ''
let corPadrao = 'Azul'
let corPerfil = corPersonalizada || corPadrao

console.log(corPerfil)