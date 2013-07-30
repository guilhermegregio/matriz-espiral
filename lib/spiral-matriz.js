module.exports = Spiral = {};

Spiral.count = 1;

Spiral.lin = 0;
Spiral.col = 0;

Spiral.matriz = function (lin, col) {
	var matriz = [];

	for (var l = 0; l < lin; l++) {
		matriz.push([]);
		for (var c = 0; c < col; c++) {
			matriz[l][c] = 0;
		};
	};
	return matriz;
};

var frente = function(lin, col, matriz){
	for (var c = col; c < Spiral.col; c++) {
		matriz[lin][c] = Spiral.count;
		Spiral.count++;
	};
};

Spiral.spiral = function (lin, col) {
	var spiralMatriz = Spiral.matriz(lin, col);
	Spiral.count = 1;
	Spiral.lin = lin;
	Spiral.col = col;

	frente(0, 0, spiralMatriz);

	return spiralMatriz;
}