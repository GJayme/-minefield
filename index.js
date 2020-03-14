function validaLinha(numLinha) {
  if (!(numLinha >= 3 && numLinha <= 10)) {
    return console.log("Número de linhas não compatíveis.");
  }
}

function validaColuna(numColuna) {
  if (!(numColuna >= 3 && numColuna <= 10)) {
    return console.log("Número de colunas não compatíveis.");
  }
}

function validaMina(numlinha, numColuna, numMina) {
  let totalCelulas = numlinha * numColuna;
  if (!(numMina <= 0.2 * totalCelulas)) {
    console.log("Número de minas não suportada!");
  }
}

function field(numLinha, numColuna) {
  var matriz = [];
  for (let i = 0; i < numLinha; i++) {
    matriz[i] = [];
    for (let j = 0; j < numColuna; j++) {
      matriz[i][j] = 0;
    }
  }
  return matriz;
}

function printMatriz(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i]);
  }
}

function maxBombas(linhas, colunas) {
  let totalCelulas = linhas * colunas;
  let maxBombas = totalCelulas * 0.2;

  return maxBombas;
}

function gerarBombas(linhas, colunas, matriz) {
  totalBombas = maxBombas(linhas, colunas);
  for (let i = 0; i < totalBombas; ) {
    let linha = Math.floor(Math.random() * linhas);
    let coluna = Math.floor(Math.random() * colunas);
    if (matriz[linha][coluna] === 0) {
      matriz[linha][coluna] = -1;
      i++;
    }
  }
}

function somaNumeros(linhas, colunas, matriz) {
  for (let i = 0; i < linhas; i++) {
    for (let j = 0; j < colunas; j++) {
      if (matriz[i][j] !== -1) {
        if (matriz[i - 1] !== undefined && matriz[i - 1][j - 1] === -1) {
          matriz[i][j]++;
        }
        if (matriz[i - 1] !== undefined && matriz[i - 1][j] === -1) {
          matriz[i][j]++;
        }
        if (matriz[i - 1] !== undefined && matriz[i - 1][j + 1] === -1) {
          matriz[i][j]++;
        }
        if (matriz[i][j - 1] === -1) {
          matriz[i][j]++;
        }
        if (matriz[i][j + 1] === -1) {
          matriz[i][j]++;
        }
        if (matriz[i + 1] !== undefined && matriz[i + 1][j - 1] === -1) {
          matriz[i][j]++;
        }
        if (matriz[i + 1] !== undefined && matriz[i + 1][j] === -1) {
          matriz[i][j]++;
        }
        if (matriz[i + 1] !== undefined && matriz[i + 1][j + 1] === -1) {
          matriz[i][j]++;
        }
      }
    }
  }
}

// MAIN:

matriz = field(4, 4);
console.log(matriz);
gerarBombas(4, 4, matriz);
console.log(matriz);
somaNumeros(4, 4, matriz);
console.log(matriz);
// matriz = field(4, 4, minas);
// printMatriz(matriz);
