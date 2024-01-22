class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
  
      switch (this.tipo) {
        case "mago":
          ataque = "usou magia";
          break;
        case "guerreiro":
          ataque = "usou espada";
          break;
        case "monge":
          ataque = "usou artes marciais";
          break;
        case "ninja":
          ataque = "usou shuriken";
          break;
        default:
          console.log("Tipo de herói inválido");
          return;
      }
  
      console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  const heroi1 = new Heroi("Lancelot", 35, "guerreiro");
  const heroi2 = new Heroi("Merlin", 400, "mago");
  const heroi3 = new Heroi("Sun Wukong", 500, "monge");
  const heroi4 = new Heroi("Naruto", 17, "ninja");
  
  heroi1.atacar();
  heroi2.atacar();
  heroi3.atacar();
  heroi4.atacar();
  