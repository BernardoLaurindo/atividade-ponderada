let notas = [8, 6, 7, 10, 3.5];

function calcularMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
}

let media = calcularMedia(notas);

if (media >= 7) {
    console.log("Aprovado! A média foi de: " + media);
} else {
    console.log("Reprovado! A média foi de: " + media); 
}
