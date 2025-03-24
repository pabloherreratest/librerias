import { strict as assert } from 'assert';
import {sumar,restar} from '../cap02/import/matematicas.js';


describe('Matematicas', function () {
  describe('Suma', function () {
    it('Caso 1: Suma 2 numeros positivos', function () {
        const resultadoObtenido = sumar(2,3);
        const resultadoEsperado = 5;
        assert.equal(resultadoObtenido, resultadoEsperado);
    });
    it('Caso 2: Suma 2 numeros negativos', function () {
        const resultadoObtenido = sumar(-2,-3);
        const resultadoEsperado = -5;
        assert.equal(resultadoObtenido, resultadoEsperado);
      });
    it('Caso 3: Suma numeros primero negativo y otro positivo', function () {
        const resultadoObtenido = restar(-2,-3);
        const resultadoEsperado = 1;
        assert.equal(resultadoObtenido, resultadoEsperado);
    });
  });
});