// Descomente apenas para os testes com doctest-js
import { ISO } from './interfaces.js';

/**
 * @implements {ISO}
 */
class C extends ISO {
  static tipos = ["C0", "C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10"];

  constructor(largura, comprimento, tamanhoMax) {
    super();
    this.largura = largura;
    this.comprimento = comprimento;
    this.cor = "white"; // Significa branco ou #fff
    this.gramatura = 95;
    this.tamanhoMax = tamanhoMax;

    if (this.constructor === C) {
      throw new Error("Por favor, não tente instanciar a classe abstrata C.");
    }
  }

  mostrarPropriedades() {
    return `${this.largura} mm, ${this.comprimento} mm, ${this.cor}, ${this.gramatura} gsm, ${this.tamanhoMax} mm2`;
  }

  retornar_tipos() {
    return this.constructor.tipos;
  }
}

class C0 extends C {
  static #instance;

  constructor() {
    super(917, 1297, 1189349);

    if (C0.#instance) {
      return C0.#instance;
    }
    
    C0.#instance = this;
  }

  /**
   * Retorna uma string com os atributos relevantes
   *
   * @example mostrarPropriedades()
   * //=> "917 mm, 1297 mm, white, 95 gsm, 1189349 mm2"
   */

  /**
   * Retorna uma string com o formato do papel
   *
   * @example mostrarTamanhoFolha()
   * //=> "917 x 1297 mm"
   */
  
  /**
   * Retorna uma string com os tipos da especificação C
   *
   * @example retornar_tipos()
   * //=> ["C0", "C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10"]
   */

  static getInstance() {
    if (!C0.#instance) {
      C0.#instance = new C0();
    }

    return C0.#instance;
  }
}

class C1 extends C {
  static #instance;

  constructor() {
    super();

    if (C1.#instance) {
      return C1.#instance;
    }

    this.largura = 648; // Largura do C1 em mm
    this.comprimento = 917; // Comprimento do C1 em mm
    this.tamanhoMax = 594216; // Tamanho máximo do C1 em mm2
    C1.#instance = this;
  }

  static getInstance() {
    if (!C1.#instance) {
      C1.#instance = new C1();
    }

    return C1.#instance;
  }
}

class C2 extends C {
  static #instance;

  constructor() {
    super();

    if (C2.#instance) {
      return C2.#instance;
    }

    this.largura = 458; // Largura do C2 em mm
    this.comprimento = 648; // Comprimento do C2 em mm
    this.tamanhoMax = 296784; // Tamanho máximo do C2 em mm2
    C2.#instance = this;
  }

  static getInstance() {
    if (!C2.#instance) {
      C2.#instance = new C2();
    }

    return C2.#instance;
  }
}

class C3 extends C {
  static #instance;

  constructor() {
    super();

    if (C3.#instance) {
      return C3.#instance;
    }

    this.largura = 324; // Largura do C3 em mm
    this.comprimento = 458; // Comprimento do C3 em mm
    this.tamanhoMax = 14839; // Tamanho máximo do C3 em mm2
    C3.#instance = this;
  }

  static getInstance() {
    if (!C3.#instance) {
      C3.#instance = new C3();
    }

    return C3.#instance;
  }
}

class C4 extends C {
  static #instance;

  constructor() {
    super();

    if (C4.#instance) {
      return C4.#instance;
    }

    this.largura = 229; // Largura do C4 em mm
    this.comprimento = 324; // Comprimento do C4 em mm
    this.tamanhoMax = 74196; // Tamanho máximo do C4 em mm2
    C4.#instance = this;
  }

  static getInstance() {
    if (!C4.#instance) {
      C4.#instance = new C4();
    }

    return C4.#instance;
  }
}

class C5 extends C {
  static #instance;

  constructor() {
    super();

    if (C5.#instance) {
      return C5.#instance;
    }

    this.largura = 162; // Largura do C5 em mm
    this.comprimento = 229; // Comprimento do C5 em mm
    this.tamanhoMax = 37098; // Tamanho máximo do C5 em mm2
    C5.#instance = this;
  }

  static getInstance() {
    if (!C5.#instance) {
      C5.#instance = new C5();
    }

    return C5.#instance;
  }
}

class C6 extends C {
  static #instance;

  constructor() {
    super();

    if (C6.#instance) {
      return C6.#instance;
    }

    this.largura = 114; // Largura do C6 em mm
    this.comprimento = 162; // Comprimento do C6 em mm
    this.tamanhoMax = 18468; // Tamanho máximo do C6 em mm2
    C6.#instance = this;
  }

  static getInstance() {
    if (!C6.#instance) {
      C6.#instance = new C6();
    }

    return C6.#instance;
  }
}
class C7 extends C {
  static #instance;

  constructor() {
    super();

    if (C7.#instance) {
      return C7.#instance;
    }

    this.largura = 81; // Largura do C7 em mm
    this.comprimento = 114; // Comprimento do C7 em mm
    this.tamanhoMax = 9234; // Tamanho máximo do C7 em mm2
    C7.#instance = this;
  }

  static getInstance() {
    if (!C7.#instance) {
      C7.#instance = new C7();
    }

    return C7.#instance;
  }
}
class C8 extends C {
  static #instance;

  constructor() {
    super();

    if (C8.#instance) {
      return C8.#instance;
    }

    this.largura = 57; // Largura do C8 em mm
    this.comprimento = 81; // Comprimento do C8 em mm
    this.tamanhoMax = 4617; // Tamanho máximo do C8 em mm2
    C8.#instance = this;
  }

  static getInstance() {
    if (!C8.#instance) {
      C8.#instance = new C8();
    }

    return C8.#instance;
  }
}

class C9 extends C {
  static #instance;

  constructor() {
    super();

    if (C9.#instance) {
      return C9.#instance;
    }

    this.largura = 40; // Largura do C9 em mm
    this.comprimento = 57; // Comprimento do C9 em mm
    this.tamanhoMax = 2280; // Tamanho máximo do C9 em mm2
    C9.#instance = this;
  }

  static getInstance() {
    if (!C9.#instance) {
      C9.#instance = new C9();
    }

    return C9.#instance;
  }
}

class C10 extends C {
  static #instance;

  constructor() {
    super();

    if (C10.#instance) {
      return C10.#instance;
    }

    this.largura = 28; // Largura do C10 em mm
    this.comprimento = 40; // Comprimento do C10 em mm
    this.tamanhoMax = 1120; // Tamanho máximo do C10 em mm2
    C10.#instance = this;
  }

  static getInstance() {
    if (!C10.#instance) {
      C10.#instance = new C10();
    }

    return C10.#instance;
  }
}

// Descomente apenas para os testes com doctest-js
export { C, C0 }
