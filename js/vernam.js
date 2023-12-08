// Función para cifrar utilizando el cifrado de Vernam
function cifrar() {
  const mensaje = document.getElementById('mensaje').value;
  const clave = document.getElementById('clave').value;
  const mensajeCifrado = cifrarVernam(mensaje, clave);
  document.getElementById('cifrado').value = mensajeCifrado;
}

// Función para descifrar utilizando el cifrado de Vernam
function descifrar() {
  const mensajeCifrado = document.getElementById('mensajeDescifrar').value;
  const claveDescifrar = document.getElementById('claveDescifrar').value;
  const mensajeDescifrado = descifrarVernam(mensajeCifrado, claveDescifrar);
  document.getElementById('descifrado').value = mensajeDescifrado;
}

// Función para cifrar utilizando el cifrado de Vernam
function cifrarVernam(mensaje, clave) {
  let mensajeCifrado = '';

  for (let i = 0; i < mensaje.length; i++) {
    const charCodeMensaje = mensaje.charCodeAt(i);
    const charCodeClave = clave.charCodeAt(i % clave.length);
    const charCodeCifrado = charCodeMensaje ^ charCodeClave;
    mensajeCifrado += charCodeCifrado.toString(16).padStart(2, '0'); // Representación en hexadecimal
  }

  return mensajeCifrado;
}

// Función para descifrar utilizando el cifrado de Vernam
function descifrarVernam(mensajeCifrado, clave) {
  let mensajeDescifrado = '';

  for (let i = 0; i < mensajeCifrado.length; i += 2) {
    const byteCifrado = parseInt(mensajeCifrado.substr(i, 2), 16);
    const charCodeClave = clave.charCodeAt(i / 2 % clave.length);
    const charCodeDescifrado = byteCifrado ^ charCodeClave;
    mensajeDescifrado += String.fromCharCode(charCodeDescifrado);
  }

  return mensajeDescifrado;
}