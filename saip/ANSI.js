// Apenas descomente nos testes
import { ANSI } from './interfaces.js';

const propriedades = function (largura, comprimento, cor, gramatura, tamanhoMax) { return `${largura} in, ${comprimento} in, ${cor}, ${gramatura} gsm, ${tamanhoMax} sq in` };

/**
 * @implements {ANSI}
 */
class ANSI_A extends ANSI {
  static #instance;
  constructor() {
    //(largura, comprimento, cor, gramatura, tamanhoMax)
    super(8.5, 11, "white", 95, 93.5);

    if (ANSI_A.#instance) return ANSI_A.#instance;
    ANSI_A.#instance = this;
  }

  /**
   * Retorna uma string com os atributos relevantes
   *
   * @example mostrarPropriedades()
   * //=> "8.5 in, 11 in, white, 95 gsm, 93.5 sq in"
   */
  mostrarPropriedades() {
    return propriedades(this.largura, this.comprimento, this.cor, this.gramatura, this.tamanhoMax);
  }

  /**
   * Retorna uma string com o formato do papel
   *
   * @example mostrarTamanhoFolha()
   * //=> "8.5 x 11 in"
   */

  /**
   * Retorna uma string com o formato do papel em milimetros
   *
   * @example converterPolegadasEmMM()
   * //=> "215.9 x 279.4 mm"
   */
  
  static getInstance() {
    if (!ANSI_A.#instance) ANSI_A.#instance = new ANSI_A();
    return ANSI_A.#instance;
  }
}
/**
 * @implements {ANSI}
 */
class ANSI_B extends ANSI {
  static #instance;
  constructor() {
    //(largura, comprimento, cor, gramatura, tamanhoMax)
    super(11, 17, "white", 95, 187);

    if (ANSI_B.#instance) return ANSI_B.#instance;
    ANSI_B.#instance = this;
  }

  mostrarPropriedades() {
    return propriedades();
  }

  static getInstance() {
    if (!ANSI_B.#instance) ANSI_B.#instance = new ANSI_B();
    return ANSI_B.#instance;
  }
}
/**
 * @implements {ANSI}
 */
class ANSI_C extends ANSI {
  static #instance;
  constructor() {
    //(largura, comprimento, cor, gramatura, tamanhoMax)
    super(17, 22, "white", 95, 374);

    if (ANSI_C.#instance) return ANSI_C.#instance;
    ANSI_C.#instance = this;
  }

  mostrarPropriedades() {
    return propriedades();
  }

  static getInstance() {
    if (!ANSI_C.#instance) ANSI_C.#instance = new ANSI_C();
    return ANSI_C.#instance;
  }
}
/**
 * @implements {ANSI}
 */
class ANSI_D extends ANSI {
  static #instance;
  constructor() {
    //(largura, comprimento, cor, gramatura, tamanhoMax)
    super(22, 34, "white", 95, 748);

    if (ANSI_D.#instance) return ANSI_D.#instance;
    ANSI_D.#instance = this;
  }

  mostrarPropriedades() {
    return propriedades();
  }

  static getInstance() {
    if (!ANSI_D.#instance) ANSI_D.#instance = new ANSI_D();
    return ANSI_D.#instance;
  }
}
/**
 * @implements {ANSI}
 */
class ANSI_E extends ANSI {
  static #instance;
  constructor() {
    //(largura, comprimento, cor, gramatura, tamanhoMax)
    super(34, 44, "white", 95, 1496);

    if (ANSI_E.#instance) return ANSI_E.#instance;
    ANSI_E.#instance = this;
  }

  mostrarPropriedades() {
    return propriedades();
  }

  static getInstance() {
    if (!ANSI_E.#instance) ANSI_E.#instance = new ANSI_E();
    return ANSI_E.#instance;
  }
}

// Descomente apenas para os testes
export { ANSI_A, propriedades };
