function beaufortCipher() {

    key = document.getElementById('key').value.toUpperCase();
    message = document.getElementById('inputText').value.toUpperCase();

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let cipherText = "";

    // Asegurarse de que la clave sea del mismo tamaño que el mensaje
    while (key.length < message.length) {
        key += key;
    }

    for (let i = 0; i < message.length; i++) {
        const messageChar = message[i].toUpperCase();
        const keyChar = key[i % key.length].toUpperCase();

        if (alphabet.includes(messageChar)) {
            const keyIndex = alphabet.indexOf(keyChar);
            const shift = alphabet.indexOf(messageChar) - keyIndex;

            // Manejar desbordamiento circular
            const cipherCharIndex = (shift + 26) % 26;
            cipherText += alphabet[cipherCharIndex];
        } else {
            // Mantener caracteres no alfabéticos sin cambios
            cipherText += messageChar;
        }
    }

    document.getElementById('outputText').value = cipherText;
    return cipherText;
}


// Ejemplo de uso
// const key = "KEY WORD";
// const message = "HELLO WORLD";
// const cipherText = beaufortCipher(key, message);
// console.log("Mensaje cifrado:", cipherText);

// const decryptedText = beaufortDecipher(key, cipherText);
// console.log("Mensaje descifrado:", decryptedText);
