
let personagens = [
    {
      nome: "Naruto Uzumaki",
      idade: 17,
      estilo: "Ninjutsu",
      jutsus: ["Rasengan", "Clone das Sombras", "Modo Sábio"]
    },
    {
      nome: "Sasuke Uchiha",
      idade: 17,
      estilo: "Sharingan",
      jutsus: ["Chidori", "Amaterasu", "Susanoo"]
    },
    {
      nome: "Sakura Haruno",
      idade: 17,
      estilo: "Taijutsu e Ninjutsu médico",
      jutsus: ["Força Sobrehumana", "Regeneração", "Controle de Chakra"]
    }
  ];
  
  function adicionarPersonagem(novoPersonagem) {
    personagens.push(novoPersonagem);
    console.log(` Personagem ${novoPersonagem.nome} adicionado com sucesso!`);
  }
  
  function buscarPersonagem(nome) {
    const personagemEncontrado = personagens.find(p => p.nome.toLowerCase() === nome.toLowerCase());
    
    if (personagemEncontrado) {
      return personagemEncontrado;
    } else {
      return ` Personagem "${nome}" não encontrado.`;
    }
  }
  
  function listarPersonagens() {
    console.log("=== Lista de Personagens ===");
    personagens.forEach(p => {
      console.log(`
  Nome: ${p.nome}
  Idade: ${p.idade}
  Estilo: ${p.estilo}
  Jutsus: ${p.jutsus.join(", ")}
  ----------------------------
  `);
    });
  }
  
  adicionarPersonagem({
    nome: "Kakashi Hatake",
    idade: 30,
    estilo: "Ninjutsu e Sharingan",
    jutsus: ["Raikiri", "Kamui", "Clone das Sombras"]
  });
  
  console.log(buscarPersonagem("Sasuke Uchiha"));
  console.log(buscarPersonagem("Itachi Uchiha"));
  
  listarPersonagens();
  