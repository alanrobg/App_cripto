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

function encrypt() {
    const plaintext = document.getElementById('plaintext').value.toUpperCase().replace(/[^A-Z]/g, '');
    const keyText = document.getElementById('key').value.split(' ').map(Number);

    if (plaintext.length % 2 !== 0) {
        alert('La longitud del texto debe ser par.');
        return;
    }

    const keyMatrix = [
        [keyText[0], keyText[1]],
        [keyText[2], keyText[3]]
    ];

    const textMatrix = [];
    for (let i = 0; i < plaintext.length; i += 2) {
        const char1 = plaintext.charCodeAt(i) - 65;
        const char2 = plaintext.charCodeAt(i + 1) - 65;
        textMatrix.push([char1, char2]);
    }

    const encryptedMatrix = matrixMultiply(textMatrix, keyMatrix);

    const mod = 26;
    const encryptedText = encryptedMatrix
        .flat()
        .map(value => String.fromCharCode((value % mod) + 65))
        .join('');

    document.getElementById('ciphertext').value = encryptedText;
}
