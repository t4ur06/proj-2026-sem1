//import doctest from '@supabase/doctest-js';
import doctestModule from '@supabase/doctest-js';
const doctest = doctestModule.default || doctestModule;
import { describe } from 'mocha';
import { iPapel, ISO, ANSI } from './saip/interfaces.js';
import { A, A0 } from './saip/ISO_A.js';
import { B, B0 } from './saip/ISO_B.js';
import { C, C0 } from './saip/ISO_C.js';
import { propriedades, ANSI_A } from './saip/ANSI.js';
import { iFactory } from './saip/program.js';

describe('Doctests', () => {
  it("Teste da Factory", () => {
    doctest('saip/program.js', { instance: new iFactory().criarPapel("A0") })
  }),
  doctest('saip/ISO_A.js', { instance: new A0() }),
  doctest('saip/ISO_B.js', { instance: new B0() }),
  doctest('saip/ISO_C.js', { instance: new C0() }),
  doctest('saip/ANSI.js', { instance: new ANSI_A() })
})
