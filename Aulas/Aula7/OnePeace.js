let ouroTotal = 75000
let membroTribulacao = 9
let recompensaBaseLuffy = 3000000000
let aumentoRecompensa = 150000000
let bonusExperiencia = 500
let forcaTripulacao = 95
let ouroPorMembro = (ouroTotal / membroTribulacao)
let restoOuro = (ouroTotal % membroTribulacao)
let novaRecompensaLuffy = (recompensaBaseLuffy + aumentoRecompensa)
let poderLuffy = (recompensaBaseLuffy * bonusExperiencia)
let reducaoAumento = (aumentoRecompensa - 50000000)

console.log("Ouro dividido pelos membros:",ouroPorMembro)
console.log("O que sobra do ouro:", restoOuro)
console.log("A recompensa base do luffy com seu aumento:", novaRecompensaLuffy)
console.log("Poder temporário do Luffy:", poderLuffy)
console.log("Valor após redução do aumento da recompença por 50.000.000:", reducaoAumento)

let forcaInimigo = 120
let chanceVitoria = 0.7
let limiteSeguranca = 0.8
let temAkumaNoMi = true
let inimigoTemHaki = true
let combateJusto = "sim"
let combateRapido = "sim"

let podeVencer = ("A Força Tripulação é: ",forcaTripulacao>=forcaInimigo)

let riscoAlto = ("A chance de vitória é:",chanceVitoria<limiteSeguranca)

let batalhaFacil = ("O combate justo é:",combateJusto==combateRapido)

console. log("A força Tripulação pode vencer ?",podeVencer)
console. log("A chance de vitória é:",riscoAlto)
console. log("O combate justo é ?",batalhaFacil)





