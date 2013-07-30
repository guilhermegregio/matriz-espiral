module.exports = Spiral = {};

Spiral.matriz = function(lin, col){

	var matriz = [];

	matriz.push([]);
	for (var c = 0; c < col; c++) {
		matriz[0][c] = 0;
	};
	return matriz;

};