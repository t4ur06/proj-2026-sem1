// Descomente apenas para os testes com doctest-js
// import { ISO } from './interfaces.js';

/**
 * @implements {ISO}
 */
class B extends ISO {
  static tamanhoMax = 1414000;
  
  constructor() {
    super();
    this.largura = this.tamanhoMax;
    this.comprimento = this.tamanhoMax;
    this.cor = "white"; // Significa branco ou #fff
    this.gramatura = 95;
    this.tamanhoMax = this.tamanhoMax;
    this.tipos = ["B0", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10"];
    
    if (this.constructor === B) {
      throw new Error("Por favor, não tente instanciar a classe abstrata B.");
    }
  }

  mostrarPropriedades() {
    return `${this.largura} mm, ${this.comprimento} mm, ${this.cor}, ${this.gramatura} gsm, ${this.tamanhoMax} mm2`;
  }
  
  retornar_tipos() {
    return this.tipos;
  }
}

class B0 extends B {
  static #instance;

  constructor() {
    super();
    
    if (B0.#instance) {
      return B0.#instance;
    }

    this.largura = 1000; // Largura do B0 em mm
    this.comprimento = 1414; // Comprimento do B0 em mm
    this.tamanhoMax = 1414000; // Tamanho máximo do B0 em mm2
    B0.#instance = this;
  }

  /**
   * Retorna uma string com os atributos relevantes
   *
   * @example mostrarPropriedades()
   * //=> "1000 mm, 1414 mm, white, 95 gsm, 1414000 mm2"
   */
    
  static getInstance() {
    if (!B0.#instance) {
      B0.#instance = new B0();
    }

    return B0.#instance;
  }
}

class B1 extends B {
  static #instance;

  constructor() {
    super();
    
    if (B1.#instance) {
      return B1.#instance;
    }

    this.largura = 707; // Largura do B1 em mm
    this.comprimento = 1000; // Comprimento do B1 em mm
    this.tamanhoMax = 707000; // Tamanho máximo do B1 em mm2
    B1.#instance = this;
  }

  static getInstance() {
    if (!B1.#instance) {
      B1.#instance = new B1();
    }

    return B1.#instance;
  }
}

class B2 extends B {
  static #instance;

  constructor() {
    super();
    
    if (B2.#instance) {
      return B2.#instance;
    }

    this.largura = 500; // Largura do B2 em mm
    this.comprimento = 707; // Comprimento do B2 em mm
    this.tamanhoMax = 353500; // Tamanho máximo do B2 em mm2
    B2.#instance = this;
  }

  static getInstance() {
    if (!B2.#instance) {
      B2.#instance = new B2();
    }

    return B2.#instance;
  }
}

class B3 extends B {
  static #instance;

  constructor() {
    super();
    
    if (B3.#instance) {
      return B3.#instance;
    }
    
    this.largura = 353; // Largura do B3 em mm
    this.comprimento = 500; // Comprimento do B3 em mm
    this.tamanhoMax = 176500; // Tamanho máximo do B3 em mm2
    B3.#instance = this;
  }

  static getInstance() {
    if (!B3.#instance) {
      B3.#instance = new B3();
    }

    return B3.#instance;
  }
}
class B4 extends B {
  static #instance;

  constructor() {
    super();
    
    if (B4.#instance) {
      return B4.#instance;
    }

    this.largura = 250; // Largura do B4 em mm
    this.comprimento = 353; // Comprimento do B4 em mm
    this.tamanhoMax = 88250; // Tamanho máximo do B4 em mm2
    B4.#instance = this;
  }
  
  static getInstance() {
    if (!B4.#instance) {
      B4.#instance = new B4();
    }
    
    return B4.#instance;
  }
}

class B5 extends B {
  static #instance;
  
  constructor() {
    super();
    
    if (B5.#instance) {
      return B5.#instance;
    }

    this.largura = 176; // Largura do B5 em mm
    this.comprimento = 250; // Comprimento do B5 em mm
    this.tamanhoMax = 44000; // Tamanho máximo do B5 em mm2
    B5.#instance = this;
  }
  
  static getInstance() {
    if (!B5.#instance) {
      B5.#instance = new B5();
    }
    
    return B5.#instance;
  }
}

class B6 extends B {
  static #instance;
  
  constructor() {
    super();
    
    if (B6.#instance) {
      return B6.#instance;
    }
    
    this.largura = 125; // Largura do B6 em mm
    this.comprimento = 176; // Comprimento do B6 em mm
    this.tamanhoMax = 22000; // Tamanho máximo do B6 em mm2
    B6.#instance = this;
  }
  
  static getInstance() {
    if (!B6.#instance) {
      B6.#instance = new B6();
    }
    
    return B6.#instance;
  }
}

class B7 extends B {
  static #instance;
  
  constructor() {
    super();
    
    if (B7.#instance) {
      return B7.#instance;
    }
    
    this.largura = 88; // Largura do B7 em mm
    this.comprimento = 125; // Comprimento do B7 em mm
    this.tamanhoMax = 11000; // Tamanho máximo do B7 em mm2
    B7.#instance = this;
  }
  
  static getInstance() {
    if (!B7.#instance) {
      B7.#instance = new B7();
    }
    
    return B7.#instance;
  }
}

class B8 extends B {
  static #instance;
  
  constructor() {
    super();
    
    if (B8.#instance) {
      return B8.#instance;
    }
    
    this.largura = 62; // Largura do B8 em mm
    this.comprimento = 88; // Comprimento do B8 em mm
    this.tamanhoMax = 5456; // Tamanho máximo do B8 em mm2
    B8.#instance = this;
  }
  
  static getInstance() {
    if (!B8.#instance) {
      B8.#instance = new B8();
    }
    
    return B8.#instance;
  }
}

class B9 extends B {
  static #instance;
  
  constructor() {
    super();
    
    if (B9.#instance) {
      return B9.#instance;
    }
    
    this.largura = 44; // Largura do B9 em mm
    this.comprimento = 62; // Comprimento do B9 em mm
    this.tamanhoMax = 2728; // Tamanho máximo do B9 em mm2
    B9.#instance = this;
  }
  
  static getInstance() {
    if (!B9.#instance) {
      B9.#instance = new B9();
    }
    
    return B9.#instance;
  }
}

class B10 extends B {
  static #instance;
  
  constructor() {
    super();
    
    if (B10.#instance) {
      return B10.#instance;
    }
    
    this.largura = 31; // Largura do B10 em mm
    this.comprimento = 44; // Comprimento do B10 em mm
    this.tamanhoMax = 1364; // Tamanho máximo do B10 em mm2
    B10.#instance = this;
  }

  static getInstance() {
    if (!B10.#instance) {
      B10.#instance = new B10();
    }

    return B10.#instance;
  }
}

// Descomente apenas para os testes com doctest-js
// export { B, B0 }
