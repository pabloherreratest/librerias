import { assert,expect,should } from 'chai';
import {sumar} from '../cap02/import/matematicas.js';
should(); // Llamar la función should()

describe('Matematicas', function () {
    describe('Suma', function () {
        it('TC01 Sumar 2 números positivos', function () {
            const obtenido = sumar(2, 3);
            const esperado = 5;
            assert.strictEqual(obtenido, esperado,"El resultado no es el esperado");
            assert.typeOf(obtenido, 'number');
            assert.isAbove(obtenido, 4);
            assert.isBelow(obtenido, 6);
        });

        it('TC02 Sumar 2 números negativos', function () {
            const obtenido = sumar(-2, -3);
            const esperado = -5;
            expect(obtenido).to.equal(esperado);
            expect(obtenido).to.be.a('number');
        });

        it('TC03 Sumar 2 números, uno negativo y otro positivo', function () {
            const obtenido = sumar(-8, 4);
            const esperado = -4;
            obtenido.should.equal(esperado);
            obtenido.should.be.a('number');
        });
    });
});