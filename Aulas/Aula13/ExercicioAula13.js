/*
const array = [11, 15, 18, 14, 12, 13]
let somaPares = 0
for (let i = 0; i <= 5; i++) {
    if (meuArray[i] % 2 === 0) {
        somaPares += meuArray[i]
    }
}
console.log('A soma dos números pares é', somaPares)

const numeros = [4, 4, 4, 4444, 44, 4444, 4444, 4444, 4444]

for(let numero of numeros){
    console.log('O número é:', numero)
    
}

const palavras = ['Oi','sumido','tudo','bem ?','Saudades']
let mensagem = ""


for(let palavra of palavras){
    mensagem+= palavra+" "
}
console.log(mensagem)*/

// EXERCICIO 1
let valor = 0
for (let i = 0; i < 5; i++) {
    valor += i
}
console.log(valor)


// EXERCICIO 2
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]

for (let numero of lista) {
    if (numero > 18) {
        console.log(numero)
    }
}

// EXERCICIO 3

const quantidadeTotal = Number(prompt('Digite a quantidade de linhas:'))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
    let linha = ""
    for(let asteriscos =0; asteriscos < quantidadeAtual + 1; asteriscos++){
        linha += "*"
    }
    console.log(linha)
    quantidadeAtual++
    
}



