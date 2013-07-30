var expect = require('chai').expect;


suite('Spiral Matriz', function () {

	var matriz = require('../').matriz;
	
	test('generate init matriz 1x1', function () {
		expect(matriz(1,1)).to.eql([[0]]);
	});
});