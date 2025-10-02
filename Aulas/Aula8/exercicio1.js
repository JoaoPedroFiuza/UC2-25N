let nome = prompt("Qual seu nome ?")
let ano = prompt("Qual seu ano de nascimento ?")
let atual = prompt("Qual seu ano atual ?")

console.log("Seu nome é:", nome)

console.log("Sua idade atual é:", atual - ano)

console.log("Aqui irei indicar se você é maior de idade:",atual - ano >= 18)

console.log("Parabéns você será um vovô de:", (atual -ano) + (2050 - atual), "anos")

console.log(typeof atual)
console.log(typeof ano)





