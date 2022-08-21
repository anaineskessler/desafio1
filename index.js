let palabra = ['J','A','V','A','S','C','R','I','P','T'];
let ahorcado =[];
for (let index = 0; index < 10; index++) {
    ahorcado [index] = '-';
}
let letra ="";
alert("Jugamos al ahorcado");
alert("Primera pista, es un lenguaje de programación y tiene 10 letras: " + ahorcado.join('') );
let mensaje = "Ingresá una letra";
alert("Tenés 10 intentos para adivinarla");
for (let intento = 1; intento <= 10; intento++) {
    letra = prompt(`Intento Nro ${intento} ${mensaje}`).toUpperCase();
    switch (letra) {
        case 'A':
            ahorcado [1]= letra;
            ahorcado [3]= letra;
            alert("Bien hasta ahora " + ahorcado.join(''));
            break;
        case 'J':
            ahorcado [0]= letra;
            alert("Bien hasta ahora " + ahorcado.join(''));
            break;
        case 'V':
            ahorcado [2]= letra;
            alert("Bien hasta ahora " + ahorcado.join(''));
            break;
        case 'S':
            ahorcado [4]= letra;
            alert("Bien hasta ahora " + ahorcado.join(''));
            break;        
        case 'C':
            ahorcado [5]= letra;
            alert("Bien hasta ahora " + ahorcado.join(''));
            break;      
        case 'R':
            ahorcado [6]= letra;
            alert("Bien hasta ahora " + ahorcado.join(''));
            break;     
        case 'I':
            ahorcado [7]= letra;
            alert("Bien hasta ahora " + ahorcado.join(''));
            break; 
        case 'P':
            ahorcado [8]= letra;
            alert("Bien hasta ahora " + ahorcado.join(''));
            break;     
        case 'T':
            ahorcado [9]= letra;
            alert("Bien hasta ahora " + ahorcado.join(''));
            break;              
        default:
            alert('Esa letra no se encuentra '+ ahorcado.join(''));
            break;
    }
    let igualdad = 0;
    for (let index = 0; index < 10; index++) {
        if (palabra[index]===ahorcado[index]){
            igualdad = igualdad + 1;
        }
        };
    if (igualdad ===10) {
        alert("FELICITACIONES ADIVINASTE LA PALABRA");
        break;
    };
}
let igualdad = 0;
for (let index = 0; index < 10; index++) {
    if (palabra[index]===ahorcado[index]){
        igualdad = igualdad + 1;
    }
};
if (igualdad ===10) {
    alert("FELICITACIONES ADIVINASTE LA PALABRA");
} else {
    alert("Lástima no la adivinaste, la palabra es JAVASCRIPT");
}


    