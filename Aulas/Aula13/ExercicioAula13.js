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
console.log(mensagem)

// EXERCICIO 1
let valor = 0
for (let i = 0; i < 5; i++) {
    valor += i
}
console.log(valor)/*No console log apresenta os valores somando 1 até chegar no 5 dai ela para de somar em 1 em 1


// EXERCICIO 2
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]

for (let numero of lista) {
    if (numero > 18) {
        console.log(numero)/* Vai aparecer todos os números em lista maiores que 18.
             Sim é suficiente, porém teria que tirar o if  e deixar só o console*/
  //  }
//}

/* EXERCICIO 3

const quantidadeTotal = Number(prompt('Digite a quantidade de linhas:'))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
    let linha = ""
    for(let asteriscos =0; asteriscos < quantidadeAtual + 1; asteriscos++){
        linha += "*"
    }
    console.log(linha)
    quantidadeAtual++
    //REPRESENTA 1 ASTERISCO POR LINHA ATÉ CHEGAR NA LINHA INDICADA POR EX SE O USUARIO COLOCAR 3 LINHAS VAI APARECE 3 ASTERISOS NA 3 LINHA E ANTERIORMENTE 2 E ASSIM POR DIANTE
    
}

let nomeAnimais = []
let bichinhos = Number(prompt('Você tem quantos animais de estimação ?'))

if(bichinhos === 0){
    console.log('Você deveria adora um !')
} else {
    for(let i = 0; i < bichinhos; i++){
      let nomeAnimal = prompt('Digite o nome do animal')
      nomeAnimais.push(nomeAnimal)
    }
}
console.log(nomeAnimais)*/

//2

arrayOriginal = [1,2,3,4,5]
for(let i = 0; i < 5; i++){
    const array = arrayOriginal[i]
    console.log(array)

}

arrayOriginal1 = [1,2,3,4,5]
for(let i = 0; i < 5; i++){
    const array1 = arrayOriginal1[i]
    console.log(array1/10)
}


