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