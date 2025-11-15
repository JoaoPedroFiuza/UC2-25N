let personagens = [  //AQUI FOI CRIADO OS PERSONAGENS COM OBJETOS COM CADA UM CONTENDO AS PROPRIEDADES O HISTORICO DE AÇOES FICOU FAZIO DEVIDO A FUNÇÃO EXPLICO ABAIXO
    {
        nome: 'Frodo',
        classe: 'Ladino',
        nivel: 3,
        hp: 10,
        habilidade: ['Coragem extraordinária', 'Resiliência espiritual', 'Discrição e furtividade'],
        historicoAcoes: []
    },

    {
        nome: 'Gandalf',
        classe: 'Mago',
        nivel: 20,
        hp: 30,
        habilidade: ['Poder mágico', 'Sabedoria e conhecimento profundo', 'Liderança e estratégia'],
        historicoAcoes: []
    },

    {
        nome: 'Legolas',
        classe: 'Patrulheiro',
        nivel: 12,
        hp: 15,
        habilidade: ['Arqueiro supremo', 'Agilidade e leveza élficas', 'Visão e audição aguçadas'],
        historicoAcoes: []
    },

    {
        nome: 'Aragorn',
        classe: 'Herói',
        nivel: 20,
        hp: 40,
        habilidade: ['Espadachim excepcional', 'Rastreador e sobrevivência', 'Liderança'],
        historicoAcoes: []
    }
];

function acaoDoMalandro(personagem, descricao) {// OBJETO / PERSONAGEM QUE VAI REALIZAR A AÇÃO EX: FRODO
    personagem.historicoAcoes.push(descricao); //DESCRICAO DIZENDO OQUE ELE FAZ ( ELE NO CASO O PERSONAGEM) E ARMAZENA OQUE O PERSONAGEM FAZ
}

function atacar(atacante, frind) {// AQUI A FUNÇÃO DO ATACANTE QUE NO CASO SERIA ALGUM 'OBJETO'
    acaoDoMalandro(atacante, `${atacante.nome} realizou um ataque em conjunto com o ${frind.nome}`);
}

function defender(personagem) {// AQUI A FUNÇÃO DO ATACANTE QUE NO CASO SERIA ALGUM 'OBJETO'
    acaoDoMalandro(personagem, `${personagem.nome} entrou em posição de defesa e defendeu o golpe dos Orcs Inimigos`);
}

function usarHabilidade(personagem, suaHabilidade) {// AQUI A FUNÇÃO DO ATACANTE QUE NO CASO SERIA ALGUM 'OBJETO'
    const habilidade = personagem.habilidade[suaHabilidade];
    acaoDoMalandro(personagem, `${personagem.nome} usou a habilidade "${habilidade}"`);
}

atacar(personagens[1], personagens[2]);//AQUI EU COLOCO OS PERSONAGENS PARA SE ALIAREM JUNTO COM OS OUTROS 
usarHabilidade(personagens[1], 2);//AQUI EU COLOCO OS PERSONAGENS PARA USAR A HABILIDADE DE ACORDO COM O PERSONAGEM SELECIONADO
defender(personagens[1]);//AQUI EU COLOCO OS PERSONAGENS PARA SE DEFENDEREM

console.log(personagens[0].historicoAcoes); //AQUI É OS CONSOLES DAS AÇÕES DO PERSONAGEM QUE APARECERÃO NO FINAL
console.log(personagens[1].historicoAcoes);
console.log(personagens[2].historicoAcoes);
