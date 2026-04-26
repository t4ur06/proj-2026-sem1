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
      throw new Error("... ISO.");
    }
  }
}

/**
 * Interface ANSI para as superclasses ANSI_, de A a E
 *
 * @interface
 * @extends {iPapel}
 */
class ANSI extends iPapel {
  constructor(largura, comprimento, cor, gramatura) {
    super(largura, comprimento, cor, gramatura);
    
    if (this.constructor === ANSI) {
      throw new Error("Não instancie ANSI diretamente.");
    }
  }
  // Racional para mostrar em mm de pol e transformar em string 
  mostrarTamanhoFolha() {
    const mm = this.convPolEmMM();
    return `${mm.larguraMM.toFixed(1)} x ${mm.comprimentoMM.toFixed(1)} mm`;
  }
  // proporcao de 1 in = 25.4 mm
  convPolEmMM() {
    return {
      larguraMM: this.largura * 25.4,
      comprimentoMM: this.comprimento * 25.4
  };
 }
}

// Descomente apenas para os testes com doctest-js
// export { iPapel, ISO, ANSI }
