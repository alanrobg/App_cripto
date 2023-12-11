function cifrarAutoclave(texto, clave) {
  texto = texto.toUpperCase();
  clave = clave.toUpperCase();

  let resultado = '';

  for (let i = 0; i < texto.length; i++) {
    let char = texto.charAt(i);
    let charCode = texto.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      let claveChar = clave.charAt(i % clave.length);
      let claveCode = claveChar.charCodeAt(0) - 65;

      let nuevoCharCode = ((charCode - 65 + claveCode) % 26) + 65;

      resultado += String.fromCharCode(nuevoCharCode);
    } else {
      resultado += char;
    }
  }

  return resultado;
}

function descifrarAutoclave(textoCifrado, clave) {
  textoCifrado = textoCifrado.toUpperCase();
  clave = clave.toUpperCase();

  let resultado = '';

  for (let i = 0; i < textoCifrado.length; i++) {
    let char = textoCifrado.charAt(i);
    let charCode = textoCifrado.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      let claveChar = clave.charAt(i % clave.length);
      let claveCode = claveChar.charCodeAt(0) - 65;

      let nuevoCharCode = ((charCode - 65 - claveCode + 26) % 26) + 65;

      resultado += String.fromCharCode(nuevoCharCode);
    } else {
      resultado += char;
    }
  }

  return resultado;
}

function cifrar() {
  let textoOriginal = document.getElementById('textoOriginal').value;
  let clave = document.getElementById('clave').value;
  let resultado = cifrarAutoclave(textoOriginal, clave);
  document.getElementById('resultado').innerText = resultado;
}

function descifrar() {
  let textoCifrado = document.getElementById('resultado').value;
  let clave = document.getElementById('clave').value;
  let resultado = descifrarAutoclave(textoCifrado, clave);
  document.getElementById('resultado').innerText = resultado;
}
