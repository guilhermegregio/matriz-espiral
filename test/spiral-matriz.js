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

suite('Direction', function () {
	var Spiral = require('../');
	var frente = Spiral.frente;
	var traz = Spiral.traz;
	var baixo = Spiral.baixo;
	var cima = Spiral.cima;

	test('frente()', function () {
		Spiral.count = 1;

		var matriz = [
			[0, 0, 0, 0, 0]
		];

		frente(1, 5, 0, 0, matriz);
		expect(matriz).to.eql([
			[1, 2, 3, 4, 5]
		]);
	});

	test('traz()', function () {
		Spiral.count = 1;

		var matriz = [
			[0, 0, 0, 0, 0]
		];

		traz(1, 5, 0, 4, matriz);
		expect(matriz).to.eql([
			[5, 4, 3, 2, 1]
		]);
	});

	test('baixo()', function () {
		Spiral.count = 1;

		var matriz = [
			[0],
			[0],
			[0],
			[0],
			[0]
		];

		baixo(5, 1, 0, 0, matriz);
		expect(matriz).to.eql([
			[1],
			[2],
			[3],
			[4],
			[5]
		]);
	});

	test('cima()', function () {
		Spiral.count = 1;

		var matriz = [
			[0],
			[0],
			[0],
			[0],
			[0]
		];

		cima(5, 1, 4, 0, matriz);
		expect(matriz).to.eql([
			[5],
			[4],
			[3],
			[2],
			[1]
		]);
	});
});

suite('Spiral Matriz', function () {
	var spiral = require('../').spiral;

	test('generate spiral matriz 1x5', function () {
		expect(spiral(1, 5)).to.eql([
			[1, 2, 3, 4, 5]
		]);
	});

	test('generate spiral matriz 5x1', function () {
		expect(spiral(5, 1)).to.eql([
			[1],
			[2],
			[3],
			[4],
			[5]
		]);
	});

	test('generate spiral matriz 4x4', function () {
		expect(spiral(4, 4)).to.eql([
			[1, 2, 3, 4],
			[12, 13, 14, 5],
			[11, 16, 15, 6],
			[10, 9, 8, 7]
		]);
	});
});