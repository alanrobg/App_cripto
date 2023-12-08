function encrypt() {
    // Función para generar la matriz Playfair
    function generateMatrix(key) {
        const alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
        let matrix = [];
        let keyWithoutDuplicates = [...new Set(key.replace(/J/g, "I"))];
        keyWithoutDuplicates = keyWithoutDuplicates.concat([...alphabet].filter(letter => !keyWithoutDuplicates.includes(letter)));

        for (let i = 0; i < 5; i++) {
            let row = [];
            for (let j = 0; j < 5; j++) {
                row.push(keyWithoutDuplicates[i * 5 + j]);
            }
            matrix.push(row);
        }

        return matrix;
    }

    // Función para obtener las coordenadas de una letra en la matriz
    function getCharCoordinates(matrix, char) {
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if (matrix[i][j] === char) {
                    return { row: i, col: j };
                }
            }
        }
    }

    // Función para cifrar un par de letras
    function encryptPair(matrix, pair) {
        const char1 = pair[0];
        const char2 = pair[1];

        const coord1 = getCharCoordinates(matrix, char1);
        const coord2 = getCharCoordinates(matrix, char2);

        // Misma fila
        if (coord1.row === coord2.row) {
            return `${matrix[coord1.row][(coord1.col + 1) % 5]}${matrix[coord2.row][(coord2.col + 1) % 5]}`;
        }
        // Misma columna
        else if (coord1.col === coord2.col) {
            return `${matrix[(coord1.row + 1) % 5][coord1.col]}${matrix[(coord2.row + 1) % 5][coord2.col]}`;
        }
        // Formar un rectángulo
        else {
            return `${matrix[coord1.row][coord2.col]}${matrix[coord2.row][coord1.col]}`;
        }
    }

    // Formatear mensaje y clave
    key = document.getElementById('key').value.toUpperCase().replace(/J/g, "I").replace(/[^A-Z]/g, '');
    message = document.getElementById('inputText').value.toUpperCase().replace(/J/g, "I").replace(/[^A-Z]/g, '');

    // Generar la matriz
    const matrix = generateMatrix(key);

    // Dividir el mensaje en pares de letras
    const pairs = [];
    for (let i = 0; i < message.length; i += 2) {
        let pair = message[i];
        if (i + 1 < message.length) {
            pair += (message[i + 1] === message[i]) ? 'X' : message[i + 1];
        } else {
            pair += 'X';
        }
        pairs.push(pair);
    }

    // Cifrar cada par y concatenar los resultados
    const cipherText = pairs.map(pair => encryptPair(matrix, pair)).join('');
    document.getElementById('outputText').value = cipherText;

    return cipherText;

}

// Ejemplo de uso
// const key = "Caídas de Gravedad";
// const message = "Ataque al amanecer";
// const cipherText = playfairCipher(key, message);
// console.log("Mensaje cifrado:", cipherText);
