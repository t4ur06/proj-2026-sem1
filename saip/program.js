class iFactory {
  criarPapel(tipo) {
    let primeiraLetra = tipo.charAt(0);
    
    if (primeiraLetra == 'A') {
      if (tipo.includes("ANSI")) {
        switch(tipo.slice(-1)) {
          case 'A':
            return new ANSI_A();
          case 'B':
            return new ANSI_B();
          case 'C':
            return new ANSI_C();
          case 'D':
            return new ANSI_D();
          case 'E':
            return new ANSI_E();
          default:
            throw new Error("iFactory: O tipo passado está inválido.");
        }
      }
      else {
        switch(tipo) {
          case 'A0':
            return new A0();
          case 'A1':
            return new A1();
          case 'A2':
            return new A2();
          case 'A3':
            return new A3();
          case 'A4':
            return new A4();
          case 'A5':
            return new A5();
          case 'A6':
            return new A6();
          case 'A7':
            return new A7();
          case 'A8':
            return new A8();
          case 'A9':
            return new A9();
          case 'A10':
            return new A10();
            
          default:
            throw new Error("iFactory: O tipo passado está inválido e se parece com A.");
        }
      }
    }
    else if (primeiraLetra == 'B') {
      switch (tipo) {
        case 'B0':
          return new B0();
        case 'B1':
          return new B1();
        case 'B2':
          return new B2();
        case 'B3':
          return new B3();
        case 'B4':
          return new B4();
        case 'B5':
          return new B5();
        case 'B6':
          return new B6();
        case 'B7':
          return new B7();
        case 'B8':
          return new B8();
        case 'B9':
          return new B9();
        case 'B10':
          return new B10();
          
        default:
          throw new Error("iFactory: O tipo passado está inválido e se parece com B.");
      }
    }
    else if (primeiraLetra == 'C') {
      switch (tipo) {
        case 'C0':
          return new C0();
        case 'C1':
          return new C1();
        case 'C2':
          return new C2();
        case 'C3':
          return new C3();
        case 'C4':
          return new C4();
        case 'C5':
          return new C5();
        case 'C6':
          return new C6();
        case 'C7':
          return new C7();
        case 'C8':
          return new C8();
        case 'C9':
          return new C9();
        case 'C10':
          return new C10();
          
        default:
          throw new Error("iFactory: O tipo passado está inválido e se parece com C.");
      }
    }
    else {
      throw new Error("iFactory: Tipo inválido, não é por aqui que se instanceia um tipo customizado, se estiver tentando fazer isso.");
    }
  }
}
