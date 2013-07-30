module.exports = Spiral = {};

Spiral.count = 1;

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

Spiral.spiral = function (lin, col) {
	var spiralMatriz = Spiral.matriz(lin, col);
	Spiral.count = 1;

	for (var c = 0; c < col; c++) {
		spiralMatriz[0][c] = Spiral.count;
		Spiral.count++;
	};

	if (lin > 1) {
		for (var l = 1; l < lin; l++) {
			spiralMatriz[l][c - 1] = Spiral.count;
			Spiral.count++;
		};
	}
	
	return spiralMatriz;
}