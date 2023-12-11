function modInverse(a, m) {
    a = (a % m + m) % m;
    for (let x = 1; x < m; x++) {
      if ((a * x) % m == 1) {
        return x;
      }
    }
    return 1;
  }

  function matrixMultiply(matrix1, matrix2) {
    const result = [];
    for (let i = 0; i < matrix1.length; i++) {
      result[i] = [];
      for (let j = 0; j < matrix2[0].length; j++) {
        result[i][j] = 0;
        for (let k = 0; k < matrix1[0].length; k++) {
          result[i][j] += matrix1[i][k] * matrix2[k][j];
        }
      }
    }
    return result;
  }

  function decrypt() {
    const ciphertext = document.getElementById('ciphertext').value.toUpperCase().replace(/[^A-Z]/g, '');
    const keyText = document.getElementById('key').value.split(' ').map(Number);

    if (ciphertext.length % 2 !== 0) {
      alert('La longitud del texto cifrado debe ser par.');
      return;
    }

    const keyMatrix = [
      [keyText[0], keyText[1]],
      [keyText[2], keyText[3]]
    ];

    const keyDet = (keyMatrix[0][0] * keyMatrix[1][1] - keyMatrix[0][1] * keyMatrix[1][0] + 26) % 26;
    const keyInv = modInverse(keyDet, 26);

    if (keyDet === 0 || keyInv === 1) {
      alert('La matriz clave no es válida para el descifrado.');
      return;
    }

    const adjugateMatrix = [
      [keyMatrix[1][1], -keyMatrix[0][1]],
      [-keyMatrix[1][0], keyMatrix[0][0]]
    ];

    // Calcular la matriz adjunta
    for (let i = 0; i < adjugateMatrix.length; i++) {
      for (let j = 0; j < adjugateMatrix[0].length; j++) {
        adjugateMatrix[i][j] = (adjugateMatrix[i][j] + 26) % 26;
      }
    }

    // Calcular la matriz inversa
    const keyInverseMatrix = adjugateMatrix.map(row => row.map(value => (value * keyInv) % 26));

    const ciphertextMatrix = [];
    for (let i = 0; i < ciphertext.length; i += 2) {
      const char1 = ciphertext.charCodeAt(i) - 65;
      const char2 = ciphertext.charCodeAt(i + 1) - 65;
      ciphertextMatrix.push([char1, char2]);
    }

    const decryptedMatrix = matrixMultiply(ciphertextMatrix, keyInverseMatrix);

    const mod = 26;
    const decryptedText = decryptedMatrix
      .flat()
      .map(value => String.fromCharCode((value % mod) + 65))
      .join('');

    document.getElementById('decryptedtext').value = decryptedText;
  }

