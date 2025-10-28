/*let i = 0 //começo

while (i <= 3) {//Enquanto a condição for verdade que no caso é o i for menor <= 9
    console.log('Loop:', i)// Executa o console
    i++ //incrementa o iterador que no caso é o i
}

console.log('Chegou no final do código')

let estomago = 0
while (estomago < 100) {
    console.log('Quero comer mais coxinhas')
    estomago += 10 // estomago = estomago + 10
}


let i
let soma = 0

while (i !== 0) {
    i = Number(prompt('Digite varios números'))
    soma += i
}
console.log('Chegou no número', soma)

let c = 1

do {
    console.log('O valor do C é:', c)
    c++

} while (c <= 6)

for (let i = 0; i <= 9; i++) { console.log('O valor de i é:', i) }


const numeros = [14,67,89,15,23]

for(let i = 0; i<6; i++){
    console.log(numeros[i])

}*/

const array = [11, 15, 18, 14, 12, 13]
let maiorNumero = 0
for (let i = 0; i < 6; i++) {
    if(maiorNumero < array[i]) { maiorNumero = array[i] }
}
console.log(maiorNumero)

