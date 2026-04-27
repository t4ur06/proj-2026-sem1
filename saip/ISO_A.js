// Descomente apenas para os testes com doctest-js
// import { ISO } from './interfaces.js';

/**
 * @implements {ISO}
 */

class A extends ISO {
  static tamanhoMax = 999949;
  
  constructor() {
    super();
    this.largura = this.tamanhoMax;
    this.comprimento = this.tamanhoMax;
    this.cor = "white"; // Significa branco ou #fff
    this.gramatura = 95;
    this.tamanhoMax = this.tamanhoMax;
    this.tipos = ["A0", "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10"];
    
    if (this.constructor === A) {
      throw new Error("Por favor, não tente instanciar a classe abstrata A.");
    }
  }

  mostrarPropriedades() {
    return `${this.largura} mm, ${this.comprimento} mm, ${this.cor}, ${this.gramatura} gsm, ${this.tamanhoMax} mm2`;
  }

  retornar_tipos() {
    return this.tipos;
  }
}

class A0 extends A {
  static #instance;

  constructor() {
    super();
    
    if (A0.#instance) {
      return A0.#instance;
    }

    this.largura = 841; // Largura do A0 em mm
    this.comprimento = 1189; // Comprimento do A0 em mm
    this.tamanhoMax = 999949; // Tamanho máximo do A0 em mm2
    A0.#instance = this;
  }

  /**
   * Retorna uma string com os atributos relevantes
   *
   * @example mostrarPropriedades()
   * //=> "841 mm, 1189 mm, white, 95 gsm, 999949 mm2"
   */
  
  static getInstance() {
    if (!A0.#instance) {
      A0.#instance = new A0();
    }

    return A0.#instance;
  }
}

class A1 extends A {
  static #instance;

  constructor() {
    super();
    
    if (A1.#instance) {
      return A1.#instance;
    }

    this.largura = 594; // Largura do A1 em mm
    this.comprimento = 841; // Comprimento do A1 em mm
    this.tamanhoMax = 49954; // Tamanho máximo do A1 em mm2
    A1.#instance = this;
  }

  static getInstance() {
    if (!A1.#instance) {
      A1.#instance = new A1();
    }

    return A1.#instance;
  }
}

class A2 extends A {
  static #instance;

  constructor() {
    super();
    
    if (A2.#instance) {
      return A2.#instance;
    }

    this.largura = 420; // Largura do A2 em mm
    this.comprimento = 594; // Comprimento do A2 em mm
    this.tamanhoMax = 249480; // Tamanho máximo do A2 em mm2
    A2.#instance = this;
  }

  static getInstance() {
    if (!A2.#instance) {
      A2.#instance = new A2();
    }

    return A2.#instance;
  }
}

class A3 extends A {
  static #instance;

  constructor() {
    super();
    
    if (A3.#instance) {
      return A3.#instance;
    }

    this.largura = 297; // Largura do A3 em mm
    this.comprimento = 420; // Comprimento do A3 em mm
    this.tamanhoMax = 124740; // Tamanho máximo do A3 em mm2
    A3.#instance = this;
  }

  static getInstance() {
    if (!A3.#instance) {
      A3.#instance = new A3();
    }

    return A3.#instance;
  }
}
class A4 extends A {
  static #instance;

  constructor() {
    super();
    
    if (A4.#instance) {
      return A4.#instance;
    }

    this.largura = 210; // Largura do A4 em mm
    this.comprimento = 297; // Comprimento do A4 em mm
    this.tamanhoMax = 62370; // Tamanho máximo do A4 em mm2
    A4.#instance = this;
  }

  static getInstance() {
    if (!A4.#instance) {
      A4.#instance = new A4();
    }

    return A4.#instance;
  }
}
class A5 extends A {
  static #instance;

  constructor() {
    super();
    
    if (A5.#instance) {
      return A5.#instance;
    }

    this.largura = 148; // Largura do A5 em mm
    this.comprimento = 210; // Comprimento do A5 em mm
    this.tamanhoMax = 31080; // Tamanho máximo do A5 em mm2
    A5.#instance = this;
  }

  static getInstance() {
    if (!A5.#instance) {
      A5.#instance = new A5();
    }

    return A5.#instance;
  }
}
class A6 extends A {
  static #instance;

  constructor() {
    super();
    
    if (A6.#instance) {
      return A6.#instance;
    }

    this.largura = 105; // Largura do A6 em mm
    this.comprimento = 148; // Comprimento do A6 em mm
    this.tamanhoMax = 15540; // Tamanho máximo do A6 em mm2
    A6.#instance = this;
  }

  static getInstance() {
    if (!A6.#instance) {
      A6.#instance = new A6();
    }

    return A6.#instance;
  }
}
class A7 extends A {
  static #instance;

  constructor() {
    super();
    
    if (A7.#instance) {
      return A7.#instance;
    }

    this.largura = 74; // Largura do A7 em mm
    this.comprimento = 105; // Comprimento do A7 em mm
    this.tamanhoMax = 7770; // Tamanho máximo do A7 em mm2
    A7.#instance = this;
  }

  static getInstance() {
    if (!A7.#instance) {
      A7.#instance = new A7();
    }

    return A7.#instance;
  }
}
class A8 extends A {
  static #instance;

  constructor() {
    super();
    
    if (A8.#instance) {
      return A8.#instance;
    }

    this.largura = 52; // Largura do A8 em mm
    this.comprimento = 74; // Comprimento do A8 em mm
    this.tamanhoMax = 3848; // Tamanho máximo do A8 em mm2
    A8.#instance = this;
  }

  static getInstance() {
    if (!A8.#instance) {
      A8.#instance = new A8();
    }

    return A8.#instance;
  }
}
class A9 extends A {
  static #instance;

  constructor() {
    super();
    
    if (A9.#instance) {
      return A9.#instance;
    }

    this.largura = 37; // Largura do A9 em mm
    this.comprimento = 52; // Comprimento do A9 em mm
    this.tamanhoMax = 1924; // Tamanho máximo do A9 em mm2
    A9.#instance = this;
  }

  static getInstance() {
    if (!A9.#instance) {
      A9.#instance = new A9();
    }

    return A9.#instance;
  }
}
class A10 extends A {
  static #instance;

  constructor() {
    super();
    
    if (A10.#instance) {
      return A10.#instance;
    }

    this.largura = 26; // Largura do A10 em mm
    this.comprimento = 37; // Comprimento do A10 em mm
    this.tamanhoMax = 962; // Tamanho máximo do A10 em mm2
    A10.#instance = this;
  }

  static getInstance() {
    if (!A10.#instance) {
      A10.#instance = new A10();
    }

    return A10.#instance;
  }
}

// Descomente apenas para os testes com doctest-js
// export { A, A0 }
