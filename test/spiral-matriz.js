var expect = require('chai').expect;


suite('Spiral Matriz', function () {

	var matriz = require('../').matriz;

	test('generate init matriz 1x1', function () {
		expect(matriz(1,1)).to.eql([[0]]);
	});

	test('generate init matriz 1x5', function () {
		expect(matriz(1,5)).to.eql([[0,0,0,0,0]]);
	});

	test('generate init matriz 5x5', function () {
		expect(matriz(5,5)).to.eql([[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]);
	});
});