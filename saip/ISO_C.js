class C extends ISO {
  static tamanhoMax = 0;
  
  constructor() {
    super();
    this.largura = this.tamanhoMax;
    this.comprimento = this.tamanhoMax;
    this.cor = "white"; // Significa branco ou #fff
    this.gramatura = 95;
    this.tamanhoMax = this.tamanhoMax;
    this.tipos = ["C0", "C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10"];
    
    if (this.constructor === C) {
      throw new Error("Por favor, não tente instanciar a classe abstrata C.");
    }
  }
  mostrarPropriedades() {
    return `${this.largura} mm, ${this.comprimento} mm, ${this.cor}, ${this.gramatura} gsm, ${this.tamanhoMax} mm2`;
  }
  
  mostrarTamanhoFolha() {
    return `${this.tamanhoMax} x ${this.tamanhoMax} mm`;
  }

  retornar_tipos() {
    return this.tipos;
  }  
}
class C0 extends C {
  static #instance;

  constructor() {
    super();
    
    if (C0.#instance) {
      return C0.#instance;
    }

    // Aqui estaria a declaração do que muda no tipo A0, ex.:
    // this.largura = 1000;
    // Mas, como a A0 é equivalente à base do tipo A, suas propriedades são iguais
    
    C0.#instance = this;
  }

  static getInstance() {
    if (!C0.#instance) {
      C0.#instance = new C0();
    }

    return C0.#instance;
  }
}

// class C1 extends C { ... }
