var expect = require('chai').expect;

suite('Generate Matriz Initial', function () {
	var matriz = require('../').matriz;

	test('generate init matriz 1x1', function () {
		expect(matriz(1, 1)).to.eql([
			[0]
		]);
	});

	test('generate init matriz 1x5', function () {
		expect(matriz(1, 5)).to.eql([
			[0, 0, 0, 0, 0]
		]);
	});

	test('generate init matriz 5x5', function () {
		expect(matriz(5, 5)).to.eql([
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0]
		]);
	});
});

suite('Spiral Matriz', function () {
	var spiral = require('../').spiral;

	test('generate spiral matriz 1x1', function () {
		expect(spiral(1,1)).to.eql([[1]]);
	});

	test('generate spiral matriz 1x5', function () {
		expect(spiral(1,5)).to.eql([[1,2,3,4,5]]);
	});

	test('generate spiral matriz 1x5', function () {
		expect(spiral(5,1)).to.eql([[1],[2],[3],[4],[5]]);
	});
});