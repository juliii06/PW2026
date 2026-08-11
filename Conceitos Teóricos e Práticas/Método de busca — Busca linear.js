let numeros = [10, 20, 30, 40, 50];

let procurado = 30;
let encontrado = false;

for (let i = 0; i < numeros.length; i++) {

    if (numeros[i] === procurado) {
        console.log("Número encontrado na posição:", i);
        encontrado = true;
        break;
    }
}

if (!encontrado) {
    console.log("Número não encontrado");
}