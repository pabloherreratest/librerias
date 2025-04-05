// testApi.js
import { expect } from 'chai';
import { obtenerProductoPorID } from './productos.js';
import { schemaProducto } from './schemaProducto.js';
import Ajv from 'ajv';

const ajv = new Ajv({ addFormats: true });


describe('Tests para obtenerProductoPorID', function () {
  let response;

  before(async function () {
    response = await obtenerProductoPorID(4);
  });

  it('Test 1: Código de estado 200 y atributo "price" numérico', function () {
    expect(response.status).to.equal(200);
    expect(response.data).to.have.property('price').that.is.a('number');
  });

  it('Test 2: Objeto "category" contiene "image" con formato URL', function () {
    expect(response.data).to.have.property('category').that.is.an('object');
    expect(response.data.category).to.have.property('image').that.is.a('string');
    expect(response.data.category.image).to.match(/^https?:\/\/[^\s]+$/);
  });

  it('Test 3: Validación del response contra el JSON Schema', function () {
    const validate = ajv.compile(schemaProducto);
    const valid = validate(response.data);
    expect(valid, JSON.stringify(validate.errors)).to.be.true;
  });
});
