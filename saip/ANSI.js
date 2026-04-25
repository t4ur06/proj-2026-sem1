class ANSI_Series extends ANSI {
  constructor() {
    super();
    this.cor = "white"; // Significa branco ou #fff
    this.gramatura = 95; 
    this.tipos = ["ANSI_A", "ANSI_B", "ANSI_C", "ANSI_D", "ANSI_E"];
    
    if (this.constructor === ANSI_Series) {
      throw new Error("Não instancie ANSI_Series diretamente.");
    }
  }

  // Racional para mostrar em mm de pol 
  mostrarTamanhoFolha() {
    const mm = this.convPolEmMM();
    return `${this.largura}" x ${this.comprimento}" (${mm.larguraMM.toFixed(1)} x ${mm.comprimentoMM.toFixed(1)} mm)`;
  }
}

class ANSI_A extends ANSI_Series {
  static #instance;

  constructor() {
    super();
    if (ANSI_A.#instance) return ANSI_A.#instance;

    this.largura = 8.5;    // Em polegadas
    this.comprimento = 11; // Em polegadas
    this.tamanhoMax = 93.5; // polegadas quadradas
    
    ANSI_A.#instance = this;
  }

  static getInstance() {
    if (!ANSI_A.#instance) ANSI_A.#instance = new ANSI_A();
    return ANSI_A.#instance;
  }
}
class ANSI_B extends ANSI_Series {
  static #instance;

  constructor() {
    super();
    if (ANSI_B.#instance) return ANSI_B.#instance;

    this.largura = 11;    // Em polegadas
    this.comprimento = 17; // Em polegadas
    this.tamanhoMax = 187; // polegadas quadradas
    
    ANSI_B.#instance = this;
  }

  static getInstance() {
    if (!ANSI_B.#instance) ANSI_B.#instance = new ANSI_B();
    return ANSI_B.#instance;
  }
}
class ANSI_C extends ANSI_Series {
  static #instance;

  constructor() {
    super();
    if (ANSI_C.#instance) return ANSI_C.#instance;

    this.largura = 17;    // Em polegadas
    this.comprimento = 22; // Em polegadas
    this.tamanhoMax = 374; // polegadas quadradas
    
    ANSI_C.#instance = this;
  }

  static getInstance() {
    if (!ANSI_C.#instance) ANSI_C.#instance = new ANSI_C();
    return ANSI_C.#instance;
  }
}
class ANSI_D extends ANSI_Series {
  static #instance;

  constructor() {
    super();
    if (ANSI_D.#instance) return ANSI_D.#instance;

    this.largura = 22;    // Em polegadas
    this.comprimento = 34; // Em polegadas
    this.tamanhoMax = 748; // polegadas quadradas
    
    ANSI_D.#instance = this;
  }
  static getInstance() {
    if (!ANSI_D.#instance) ANSI_D.#instance = new ANSI_D();
    return ANSI_D.#instance;
  }
}
class ANSI_E extends ANSI_Series {
  static #instance;

  constructor() {
    super();
    if (ANSI_E.#instance) return ANSI_E.#instance;

    this.largura = 34;    // Em polegadas
    this.comprimento = 44; // Em polegadas
    this.tamanhoMax = 1496; // polegadas quadradas
    
    ANSI_E.#instance = this;
  }
  static getInstance() {
    if (!ANSI_E.#instance) ANSI_E.#instance = new ANSI_E();
    return ANSI_E.#instance;
  }
}