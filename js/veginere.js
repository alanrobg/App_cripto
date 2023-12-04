var textoClaro;
var clave;
var textCifrado;

function cifrarVigenere(texto, clave,des) {
    let resultado = '';
    const claveRepetida = clave.repeat(Math.ceil(texto.length / clave.length)).slice(0, texto.length);
  
    for (let i = 0; i < texto.length; i++) {
      const letraTexto = texto[i];
      const letraClave = claveRepetida[i];
      const codigoTexto = letraTexto.charCodeAt(0);
      const inicio = letraTexto >= 'a' ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
  
      if (letraTexto.match(/[a-zA-Z]/)) {
        const desplazamiento = (letraClave.charCodeAt(0) - inicio)+des;
        const codigoCifrado = (codigoTexto - inicio + desplazamiento) % 26 + inicio;
        resultado += String.fromCharCode(codigoCifrado);
      } else {
        resultado += letraTexto;
      }
    }
  
    return resultado;
  }
  
  function descifrarVigenere(textoCifrado, clave,des) {
    let resultado = '';
    const claveRepetida = clave.repeat(Math.ceil(textoCifrado.length / clave.length)).slice(0, textoCifrado.length);
  
    for (let i = 0; i < textoCifrado.length; i++) {
      const letraCifrado = textoCifrado[i];
      const letraClave = claveRepetida[i];
      const codigoCifrado = letraCifrado.charCodeAt(0);
      const inicio = letraCifrado >= 'a' ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
  
      if (letraCifrado.match(/[a-zA-Z]/)) {
        const desplazamiento = (letraClave.charCodeAt(0) - inicio) + des; // changed to subtraction for decryption
        const codigoTexto = (codigoCifrado - inicio - desplazamiento + 26) % 26 + inicio;
        resultado += String.fromCharCode(codigoTexto);
      } else {
        resultado += letraCifrado;
      }
    }
  
    // Remove special characters
    resultado = resultado.replace(/[^a-zA-Z]/g, '');
  
    return resultado;
  }

  function proceso(){
    textoClaro=document.getElementById("textoClaro").value;
    console.log(textoClaro);
    clave=document.getElementById("clave").value;
    console.log(clave);
    desplazamiento=parseInt(document.getElementById("desplazamiento").value,10);
    textoCifrado=cifrarVigenere(textoClaro,clave,desplazamiento);
    document.getElementById("textoCifrado").textContent=textoCifrado;
  }
  
  function proceso2(){
    textoCifrado=document.getElementById("textoCifrado").value;
    console.log(textoClaro);
    clave=document.getElementById("clave").value;
    console.log(clave);
    desplazamiento=parseInt(document.getElementById("desplazamiento").value,10);
    textoClaro=descifrarVigenere(textoCifrado,clave,desplazamiento);
    document.getElementById("textoClaro").textContent=textoClaro;
  }
  
  
  