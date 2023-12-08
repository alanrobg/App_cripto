function cifrar() {
  const mensaje = document.getElementById('mensaje').value.toUpperCase();
  let mensajeCifrado = '';

  // Definimos la matriz para el cifrado de Polybios
  const matrizPolybios = [
    ['A', 'B', 'C', 'D', 'E'],
    ['F', 'G', 'H', 'I', 'K'],
    ['L', 'M', 'N', 'O', 'P'],
    ['Q', 'R', 'S', 'T', 'U'],
    ['V', 'W', 'X', 'Y', 'Z']
  ];

  for (let i = 0; i < mensaje.length; i++) {
    const char = mensaje[i];
    if (char === ' ') {
      mensajeCifrado += ' ';
    } else {
      let letra = char;
      if (char === 'J' || char === 'j') {
        letra = 'I';
      }

      // Buscamos la posición en la matriz Polybios
      let fila, columna;
      for (let f = 0; f < matrizPolybios.length; f++) {
        const c = matrizPolybios[f].indexOf(letra);
        if (c !== -1) {
          fila = f + 1;
          columna = c + 1;
          break;
        }
      }

      // Generamos las letras correspondientes
      const letraFila = String.fromCharCode(fila + 64);
      const letraColumna = String.fromCharCode(columna + 64);
      mensajeCifrado += letraFila + letraColumna + ' ';
    }
  }

  document.getElementById('cifrado').value = mensajeCifrado.trim();
}

function descifrar() {
  const mensajeCifrado = document.getElementById('mensajeDescifrar').value.toUpperCase();
  let mensajeDescifrado = '';

  // Definimos la matriz para el cifrado de Polybios
  const matrizPolybios = [
    ['A', 'B', 'C', 'D', 'E'],
    ['F', 'G', 'H', 'I', 'K'], // Nota: I y J están en la misma posición
    ['L', 'M', 'N', 'O', 'P'],
    ['Q', 'R', 'S', 'T', 'U'],
    ['V', 'W', 'X', 'Y', 'Z']
  ];

  const palabrasCifradas = mensajeCifrado.split(' ');

  for (let i = 0; i < palabrasCifradas.length; i++) {
    const palabraCifrada = palabrasCifradas[i];
    if (palabraCifrada === '') {
      mensajeDescifrado += ' ';
    } else {
      // Obtenemos las letras de fila y columna
      const letraFila = palabraCifrada[0];
      const letraColumna = palabraCifrada[1];

      // Buscamos la posición en la matriz Polybios
      const fila = letraFila.charCodeAt(0) - 64;
      const columna = letraColumna.charCodeAt(0) - 64;

      // Obtenemos la letra original de la matriz Polybios
      const letraOriginal = matrizPolybios[fila - 1][columna - 1];

      mensajeDescifrado += letraOriginal;
    }
  }

  document.getElementById('descifrado').value = mensajeDescifrado;
}

  