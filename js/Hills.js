function cifrar() {
    const texto = document.getElementById('inputText').value.toUpperCase();
    const matrizClave = parseMatrizClave(document.getElementById('keyMatrix').value);

    // Lógica de cifrado Hill
    // Implementa la lógica de cifrado aquí

    const resultado = "Texto cifrado"; // Reemplazar con el resultado real

    document.getElementById('outputText').innerText = resultado;
}

function descifrar() {
    const textoCifrado = document.getElementById('inputText').value.toUpperCase();
    const matrizClave = parseMatrizClave(document.getElementById('keyMatrix').value);

    // Lógica de descifrado Hill
    // Implementa la lógica de descifrado aquí

    const resultado = "Texto descifrado"; // Reemplazar con el resultado real

    document.getElementById('outputText').innerText = resultado;
}

function parseMatrizClave(matrizString) {
    // Convierte la cadena de la matriz clave en una matriz 2D
    // Implementa la lógica de conversión aquí
    return [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; // Reemplazar con la lógica real
}
