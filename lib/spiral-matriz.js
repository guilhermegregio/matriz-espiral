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

Spiral.frente = function (tLin, tCol, lin, col, matriz) {

	while (true) {
		if (matriz[lin][col] === 0) {
			matriz[lin][col] = Spiral.count;
			col++;
			Spiral.count++;
		} else {
			break;
		}
		if (col >= tCol) {
			break;
		}

	}
	return col;
};

Spiral.traz = function (tLin, tCol, lin, col, matriz) {

	while (true) {
		if (col < 0) {
			break;
		}

		if (matriz[lin][col] === 0) {
			matriz[lin][col] = Spiral.count;
			col--;
			Spiral.count++;
		} else {
			break;
		}
	}
	return col;
};

Spiral.baixo = function (tLin, tCol, lin, col, matriz) {

	while (true) {
		if (matriz[lin] !== undefined && matriz[lin][col] === 0) {
			matriz[lin][col] = Spiral.count;
			lin++;
			Spiral.count++;
		} else {
			break;
		}

		if (lin >= tLin) {
			break;
		}
	}

	return lin;
};

Spiral.cima = function (tLin, tCol, lin, col, matriz) {

	while (true) {
		if (lin < 0) {
			break;
		}

		if (matriz[lin][col] === 0) {
			matriz[lin][col] = Spiral.count;
			lin--;
			Spiral.count++;
		} else {
			break;
		}
	}

	return lin;
};

Spiral.spiral = function (lin, col) {
	var spiralMatriz = Spiral.matriz(lin, col);
	var total = lin * col;
	Spiral.count = 1;
	var coluna = 0,
		linha = 0;


	var n = 0;
	while (true) {
		if(n === 0){
			coluna = Spiral.frente(lin, col, linha, coluna, spiralMatriz);
		}else{
			coluna = Spiral.frente(lin, col, ++linha, ++coluna, spiralMatriz);
			
		}
		linha = Spiral.baixo(lin, col, ++linha, --coluna, spiralMatriz);
		coluna = Spiral.traz(lin, col, --linha, --coluna, spiralMatriz);
		linha = Spiral.cima(lin, col, --linha, ++coluna, spiralMatriz);
		n++;

		if(Spiral.count >= total+1) {
			break;
		}
	}

	return spiralMatriz;
}