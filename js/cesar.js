var textoClaro;
var desplazamiento;
var textoCifrado;

function cifrarCesar(texto, desplazamiento) {
    return texto.replace(/[a-zA-Z]/g, function(letra) {
      var codigo = letra.charCodeAt(0);
      var inicio = letra >= 'a' ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
      var cifrado = (codigo - inicio + desplazamiento) % 26;
      if (cifrado < 0) {
        cifrado += 26; // Manejar desplazamientos negativos
      }
      return String.fromCharCode(cifrado + inicio);
    });
  }
  
  function descifrarCesar(textoCifrado, desplazamiento) {
    return cifrarCesar(textoCifrado, -desplazamiento);
  }

function proceso(){
  textoClaro=document.getElementById("textoClaro").value;
  console.log(textoClaro);
  desplazamiento=parseInt(document.getElementById("desplazamiento").value,10);
  console.log(desplazamiento);
  textoCifrado=cifrarCesar(textoClaro,desplazamiento);
  //textoCifrado=descifrarCesar(textoClaro,desplazamiento);
  document.getElementById("textoCifrado").textContent=textoCifrado;
}

function proceso2(){
  textoClaro=document.getElementById("textoClaro").value;
  console.log(textoClaro);
  desplazamiento=parseInt(document.getElementById("desplazamiento").value,10);
  console.log(desplazamiento);
  //textoCifrado=cifrarCesar(textoClaro,desplazamiento);
  textoCifrado=descifrarCesar(textoClaro,desplazamiento);
  document.getElementById("textoCifrado").textContent=textoCifrado;
}
  