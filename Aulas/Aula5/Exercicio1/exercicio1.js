const nome = prompt("Qual seu nome ?")

const idade = prompt("Qual sua idade ?")

console.log(nome, idade)

console.log(typeof(nome))

console.log(typeof(idade))

//Numero () conversor de stringer para number

const idadeNumero = Number(idade)
console.log(typeof(idadeNumero))

//toString conversor de number para String

const idadeTexto = idadeNumero.toString()
console.log(typeof(idadeTexto))


