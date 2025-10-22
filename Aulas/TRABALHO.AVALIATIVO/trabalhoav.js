
// 1. Velocidades das ferramentas
const velocidadeMadeira = 10
const velocidadePedra = 20
const velocidadeFerro = 30
const velocidadeDiamante = 40
//bloco que vamos utilizado, variavel a qual utilizamos o valor
const blocoMinerar = 'Obsidiana'
// comparação com if e else
if (blocoMinerar) { console.log('Use Picareta de Diamante', velocidadeDiamante) }
else if (blocoMinerar) { console.log('Picareta de Ferro ou de pedra é o ideal', velocidadePedra) }
else console.log('Qualquer ferramenta funciona, mas a de Madeira é a mais simples')


// parte um, criado as variaveis
const danoEspada = 6
const forcaEncantamento = 1.5
const armaduraInimiga = 2
let vidaInimiga = 20

// parte dois criamos as contas usando operadores aritméticos para saber o dano bruto

let danoBruto = danoEspada * forcaEncantamento
console.log(`o dano bruto é ${danoBruto}`)

// parte tres criamos as contas usando operadores aritméticos para saber o dano final

const danoFinal = danoBruto - armaduraInimiga
console.log(`o dano final é ${danoFinal}`)

// parte quatro criamos a variavel atribuindo a subtração
vidaInimiga -= danoFinal

// parte cinco estrutura if else
if(vidaInimiga <= 0){
    console.log('O Creeper foi derrotado! Você sobreviveu à explosão!')
}
else 
    console.log(`O Creeper ainda está vivo com ${vidaInimiga} de vida. Corra!`)




// parte 1
// criada variavies constantes(const) e variaveis alteraveis(let)
const temDiamantes = true
let niivelMesaCrafting = 2
const temGravetos = false
let temFerro = 10

//usando estrutura condicional 
if( temGravetos || niivelMesaCrafting < 3 && temDiamantes && temFerro >= 8){
console.log('Picareta de Diamante criada! Hora de buscar Obsidiana!')}
else
    console.log('Faltam recursos ou as condições de crafting não são atendidas!')















