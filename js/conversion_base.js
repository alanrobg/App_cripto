function processText() {
    const inputText = document.getElementById("inputText").value;
    const operation = document.getElementById("operation").value;
    let outputText = "";

    switch (operation) {
        case "encrypt":
            outputText = base64Encode(inputText);
            break;
        case "decrypt":
            outputText = base64Decode(inputText);
            break;
        default:
            break;
    }

    document.getElementById("outputText").value = outputText;
}

function base64Encode(text) {
    return btoa(text);
}

function base64Decode(encodedText) {
    return atob(encodedText);
}