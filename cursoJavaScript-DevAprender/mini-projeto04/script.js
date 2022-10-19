// Velocidade máxima de 70km/h
// A cada 5km acima do limite você ganha 1 ponto na carteira
// Caso os pontos sejam maiores que 12 => "Carteira Suspendida"
// Math.floor() para arredondar os valores

verifySpeed(135)
function verifySpeed(speed){
    const maxSpeed = 70
    const kmPoints = 5
    const maxPoints = 12
    const points = Math.floor((speed - maxSpeed) / kmPoints)

    if(speed > maxSpeed){
        console.log('Pontos: ', points)
        if(points > maxPoints) {
            console.log('Carteira Suspensa')
        }
    }
    else {
        console.log('Ok')
    }
}