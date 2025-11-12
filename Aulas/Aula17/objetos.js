/*const professor = { //Arrays = []     Objetos = {}
    idade : 28,
    nome : 'Maria',
    tarefas : ['Dar aula', 'Responder dúvidas']

}

const aluno = {
    nome : 'Joao Pedro',
    idade : 24,
    email : 'jpfwilges@gmail.com'

}

console.log(aluno.nome)
console.log(aluno['idade'])
console.log(aluno.email)


const filme = {
    direçao: 'Christopher Nolan',
    nome : 'Interestelar',
    ano : 2014,
    elenco : 'Matthew McConaugheyc,Anne Hathaway,Mackenzie Foy,Matt Damon,Michael Cane',
    assisti: 'Sim'
}

console.log(filme.direçao)
console.log(filme.nome)
console.log(filme.elenco)
console.log(filme['ano'])
console.log(filme['assisti'])


const pessoa = {
    nome : 'afonso',
    idade : '23',
    generoMusical :'musica russa'

}

console.log('O nome da pessoa é',(pessoa.nome),'ele tem',(pessoa.idade),'anos e gosta muito de',(pessoa.generoMusical))


/*const professores = [
    {nome : 'Lucas', modulo : 2},
    {nome : 'Dal', modulo : 1},
    {nome : 'valter', modulo : 1}
]
console.log('O professor', professores[0].nome, 'deu o modulo',professores[0].modulo)



const personagens = [
    {nome : 'Matthew McConaugheyc', papel : 'Cooper'},
    {nome : 'Anne Hathaway', papel : 'Nurphy Cooper'},
    {nome : 'Michael Cane', papel : 'Professor Brand'}
]
personagens[0].papel = 'Xuxa' 
console.log('Nosso elenco com personagens fica:',personagens[0].nome,'virará como:',personagens[0].papel)
console.log('Nosso elenco com personagens fica:',personagens[1].nome,'virará como:',personagens[1].papel)
console.log('Nosso elenco com personagens fica:',personagens[2].nome,'virará como:',personagens[2].papel)

function novoObjeto (objeto){
    const novaPessosa = {
        ...objeto,
        comida : ['xis','pizza'],
        melhorAmigo:{
            nome: 'Joao Pedro',
            idade : 24
        }
    }
    console.log('O nome da pessoa é',pessoa.nome,'e suas comidas preferidas são',novaPessosa.comida[0],'e',novaPessosa.comida[1],'. Seu melhor amigo se chama',novaPessosa.melhorAmigo.nome,'e tem',novaPessosa.melhorAmigo.idade,'anos')
    
    }

    novoObjeto(pessoa)*/



let personagens = [{
    naruto: {
        nome: 'Naruto',
        idade: 17,
        estilo: 'taijutso e ninjutso',
        jutsus: 'Chidori'
    },
    sakura: {
        nome: 'Sakura',
        idade: 17,
        estilo: 'taijutso',
        jutsus: 'Chidori'
    },
    sasuke: {
        nome: 'Sasuke',
        idade: 17,
        estilo: 'taijutso e ninjutso',
        jutsus: 'Chidori'
    }
    function adicionarPersonagem(novoPersonagem) {
        personagens.push(novoPersonagem);
        console.log('Personagem',(novoPersonagem.nome))
}]

