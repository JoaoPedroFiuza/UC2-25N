/*let condicao1 = true
let condicao2 = false

if(condicao1&&condicao2){
    console.log('Executou o if do operador && AND')
}

if(condicao1||condicao2){
    console.log('Executou o if do operador || OR');
}

if(!condicao1){
    console.log('Executou o if do operador ! NOT')
}*/

const ensinoMedio = prompt('Já concluiu o Ensimo Médio ?').toLowerCase() === "sim"
const idadeDoMenor = Number(prompt('Quantos aninhos tens ?')) >= 18 
const cursando = prompt('Esta cursando Faculdade').toLowerCase() === 'sim'

if(ensinoMedio&&idadeDoMenor&&!cursando){
    console.log('Você pode estudar nossa faculdade')
}
else{
    console.log('Você não pode estudar nessa faculdade')
}
    

