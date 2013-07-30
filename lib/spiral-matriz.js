module.exports = Spiral = {};

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

Spiral.spiral = function(lin, col){
	var spiralMatriz = Spiral.matriz(lin, col);

	spiralMatriz[0][0] = 1;
	
	return spiralMatriz;
}