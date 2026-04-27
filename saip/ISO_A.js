// Descomente apenas para os testes com doctest-js
import { ISO } from './interfaces.js';

/**
 * @implements {ISO}
 */
class A extends ISO {
  static tipos = ["A0", "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10"];
  
  constructor(largura, comprimento, tamanhoMax) {
    super();
    this.largura = largura;
    this.comprimento = comprimento;
    this.cor = "white"; // Significa branco ou #fff
    this.gramatura = 95;
    this.tamanhoMax = tamanhoMax;
    
    if (this.constructor === A) {
      throw new Error("Por favor, não tente instanciar a classe abstrata A.");
    }
  }

  mostrarPropriedades() {
    return `${this.largura} mm, ${this.comprimento} mm, ${this.cor}, ${this.gramatura} gsm, ${this.tamanhoMax} mm2`;
  }

  retornar_tipos() {
    return this.constructor.tipos;
  }
}

class A0 extends A {
  static #instance;

  constructor() {
    super(841, 1189, 999949);
    
    if (A0.#instance) {
      return A0.#instance;
    }

    A0.#instance = this;
  }

  /**
   * Retorna uma string com os atributos relevantes
   *
   * @example mostrarPropriedades()
   * //=> "841 mm, 1189 mm, white, 95 gsm, 999949 mm2"
   */

  /**
   * Retorna uma string com o formato do papel
   *
   * @example mostrarTamanhoFolha()
   * //=> "841 x 1189 mm"
   */

  /**
   * Retorna uma string com os tipos da especificação A
   *
   * @example retornar_tipos()
   * //=> ["A0", "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10"]
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
    super(594, 841, 49954);
    
    if (A1.#instance) {
      return A1.#instance;
    }
    
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
    super(420, 594, 249480);
    
    if (A2.#instance) {
      return A2.#instance;
    }

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
    super(297, 420, 124740);
    
    if (A3.#instance) {
      return A3.#instance;
    }

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
    super(210, 297, 62370);
    
    if (A4.#instance) {
      return A4.#instance;
    }

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
    super(148, 210, 31080);
    
    if (A5.#instance) {
      return A5.#instance;
    }

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
    super(105, 148, 15540);
    
    if (A6.#instance) {
      return A6.#instance;
    }

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
    super(74, 105, 7770);
    
    if (A7.#instance) {
      return A7.#instance;
    }

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
    super(52, 74, 3848);
    
    if (A8.#instance) {
      return A8.#instance;
    }

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
    super(37, 52, 1924);
    
    if (A9.#instance) {
      return A9.#instance;
    }

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
    super(26, 37, 962);
    
    if (A10.#instance) {
      return A10.#instance;
    }

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
 export { A, A0 }
