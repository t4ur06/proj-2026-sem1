// Apenas descomente nos testes
//import { ANSI } from './interfaces.js';
class ANSI_A extends ANSI {
  static #instance;
  constructor() {
    //(largura, comprimento, cor, gramatura)
    super(8.5, 11, "white", 95);
    
    if (ANSI_A.#instance) return ANSI_A.#instance;
    this.tamanhoMax = 93.5; // polegadas quadradas
    ANSI_A.#instance = this;
  }
  static getInstance() {
    if (!ANSI_A.#instance) ANSI_A.#instance = new ANSI_A();
    return ANSI_A.#instance;
  }  
}
class ANSI_B extends ANSI {
  static #instance;
  constructor() {
    //(largura, comprimento, cor, gramatura)
    super(11, 17, "white", 95);
    
    if (ANSI_B.#instance) return ANSI_B.#instance;
    this.tamanhoMax = 187; // polegadas quadradas
    ANSI_B.#instance = this;
  }
  static getInstance() {
    if (!ANSI_B.#instance) ANSI_B.#instance = new ANSI_B();
    return ANSI_B.#instance;
  }  
}
class ANSI_C extends ANSI {
  static #instance;
  constructor() {
    //(largura, comprimento, cor, gramatura)
    super(17, 22, "white", 95);
    
    if (ANSI_C.#instance) return ANSI_C.#instance;
    this.tamanhoMax = 374; // polegadas quadradas
    ANSI_C.#instance = this;
  }
  static getInstance() {
    if (!ANSI_C.#instance) ANSI_C.#instance = new ANSI_C();
    return ANSI_C.#instance;
  }  
}
class ANSI_D extends ANSI {
  static #instance;
  constructor() {
    //(largura, comprimento, cor, gramatura)
    super(22, 34, "white", 95);
    
    if (ANSI_D.#instance) return ANSI_D.#instance;
    this.tamanhoMax = 748; // polegadas quadradas
    ANSI_D.#instance = this;
  }
  static getInstance() {
    if (!ANSI_D.#instance) ANSI_D.#instance = new ANSI_D();
    return ANSI_D.#instance;
  }  
}
class ANSI_E extends ANSI {
  static #instance;
  constructor() {
    //(largura, comprimento, cor, gramatura)
    super(34, 44, "white", 95);
    
    if (ANSI_E.#instance) return ANSI_E.#instance;
    this.tamanhoMax = 1496; // polegadas quadradas
    ANSI_E.#instance = this;
  }
  static getInstance() {
    if (!ANSI_E.#instance) ANSI_E.#instance = new ANSI_E();
    return ANSI_E.#instance;
  }
}

// Descomente apenas para os testes
//export { ANSI_A, ANSI_B, ANSI_C, ANSI_D, ANSI_E };
