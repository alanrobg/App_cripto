const abecedarioEspanol = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const abecedarioIngles = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const c_key = document.getElementById("key_container");
const c_lang = document.getElementById("lang_container");

c_key.style.display = "none";
c_lang.style.display = "none";

function hideoptions(){
    const cipherType = document.getElementById("cipherType").value;
    switch (cipherType) {
        case "simple":
            c_key.style.display = "none";
            c_lang.style.display = "none";
            break;
        case "group":
            c_key.style.display = "block";
            c_lang.style.display = "none";
            break;
        case "column":
            c_key.style.display = "block";
            c_lang.style.display = "block";
            break;
        default:
            break;
    }

}

function processText() {
    const inputText = document.getElementById("inputText").value;
    const inputKey = document.getElementById("inputKey").value;
    const operation = document.getElementById("operation").value;
    const cipherType = document.getElementById("cipherType").value;
    const language = document.getElementById("language").value;
    let outputText = "";

    switch (cipherType) {
        case "simple":
            outputText = simpleTransposition(inputText, operation);
            break;
        case "group":
            outputText = groupTransposition(inputText, inputKey, operation);
            break;
        case "column":
            outputText = columnTransposition(inputText, inputKey, operation, language);
            break;
        default:
            break;
    }

    document.getElementById("outputText").value = outputText;
}

function simpleTransposition(text, operation) {
    if (operation === "encrypt") {
        return Array.from(text).sort(() => Math.random() - 0.5).join('');
    }
}

function groupTransposition(text, key, operation) {
    var palabra = text;
    var clave = key;
    palabra = palabra.replace(/\s+/g, '');
    var indices = clave.length;
    let letras = [];
    let temp_ind = 0;
    for (let i = 0; i < palabra.length; i++) {
        temp_ind++;
        if(temp_ind>indices){
            temp_ind=1;
        }

        if (!letras[temp_ind]) {
            letras[temp_ind] = [];
        }

        letras[temp_ind].push(palabra[i]);
    }

    if (operation === "encrypt") {
        const encriptado = [];
        claves = clave.split("").map(Number);
        console.log(claves);
        for (let i = 0; i < letras[1].length; i++) {
            for(let j = 0; j < claves.length; j++){
                
                if (letras[claves[j]] && letras[claves[j]][i] !== undefined) {
                    encriptado.push(letras[claves[j]][i]);
                }else{
                    encriptado.push('X');
                }
            }
        }
    
        return encriptado.join('');
    }
    
}

function columnTransposition(text, key, operation, language) {

    if (operation === "encrypt") {
        var palabra = text;
        var clave = key;
        palabra = palabra.replace(/\s+/g, '');

        var indices = clave.length;
        let letras = [];
        let temp_ind = 0;
        for (let i = 0; i < palabra.length; i++) {
            temp_ind++;
            if(temp_ind>indices){
                temp_ind=1;
            }

            if (!letras[temp_ind]) {
                letras[temp_ind] = [];
            }

            letras[temp_ind].push(palabra[i]);
        }
        
        claves = clave.split("");
        var clavessort = claves.slice();
        clavessort.sort();

        let letrassort = [];
        for (let i = 0; i < claves.length; i++) {
            let nposicion = clavessort.indexOf(claves[i]);
            letrassort[nposicion] = letras[i+1];
        }

        return letrassort.map(subitem => subitem.join('')).join('');

    }
}