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

  mostrarPropriedades() {
    throw new Error("O método 1 deve ser implementado em uma classe.");
  }
  
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
      throw new Error("Não instancie ISO diretamente.");
    }

    this.tamanhoMax = tamanhoMax;
  }

  mostrarTamanhoFolha() {
    return `${this.largura} x ${this.comprimento} mm`;
  }
}

/**
 * Interface ANSI para as superclasses ANSI_, de A a E
 *
 * @interface
 * @extends {iPapel}
 */
class ANSI extends iPapel {
  constructor(largura, comprimento, cor, gramatura, tamanhoMax) {
    super();
    
    if (this.constructor === ANSI) {
      throw new Error("Não instancie ANSI diretamente.");
    }

    this.largura = largura;
    this.comprimento = comprimento;
    this.tamanhoMax = tamanhoMax;
  }
  // Racional para mostrar em mm de pol e transformar em string 
  mostrarTamanhoFolha() {
    return `${this.largura} x ${this.comprimento} in`;
  }
  // proporcao de 1 in = 25.4 mm
  converterPolegadasEmMM() {
    this.proporcao = 25.4;
    this.precisao = 1;

    return `${(this.largura * this.proporcao).toFixed(this.precisao)} x ${(this.comprimento * this.proporcao).toFixed(this.precisao)} mm`;
  }
}

// Descomente apenas para os testes com doctest-js
// export { iPapel, ISO, ANSI }
