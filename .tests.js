//import doctest from '@supabase/doctest-js';
import doctestModule from '@supabase/doctest-js';
const doctest = doctestModule.default || doctestModule;
import { describe } from 'mocha';
import { iPapel, ISO } from './saip/interfaces.js';
import { A, A0 } from './saip/ISO_A.js';

describe('Doctests', () => {
  // file paths are relative to root of directory
  doctest('saip/ISO_A.js', { instance: new A0() })
})
