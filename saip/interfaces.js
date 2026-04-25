/**
 * Interface principal
 *
 * @interface
 */
class iPapel {
  constructor(largura, comprimento, cor, gramatura) {
    if (this.constructor === iPapel) {
      throw new Error("Tentativa de instanciar interface iPapel.");
    }
    
    this.largura = largura;
    this.comprimento = comprimento;
    this.cor = cor;
    this.gramatura = gramatura;
  }

  /**
   * Retorna uma string com os atributos relevantes
   *
   * @example mostrarPropriedades()
   * //=> "999949 mm, 999949 mm, white, 95 gsm, 999949 mm2"
   */
  mostrarPropriedades() {
    throw new Error("O método 1 deve ser implementado em uma classe.");
  }

  /**
   * Retorna uma string com o formato do papel
   *
   * @example mostrarPropriedades()
   * //=> "999949 mm, 999949 mm, white, 95 gsm, 999949 mm2"
   */
  mostrarTamanhoFolha() {
    throw new Error("O método 2 deve ser implementado em uma classe.");
  }
}

/**
 * Interface ISO para as superclasses A, B e C
 *
 * @interface
 * @extends {iPapel}
 */
class ISO extends iPapel {
  constructor(tamanhoMax) {
    super();
    
    if (this.constructor === ISO) {
      throw new Error("... ISO.");
    }
  }
}

class ANSI extends iPapel {
  constructor(tamanhoMax) {
    super();
    
    if (this.constructor === ANSI) {
      throw new Error("... ANSI.");
    }
  }
}

// Descomente apenas para os testes com doctest-js
// export { iPapel, ISO }
