let notas = [5, 6, 7, 10, 3];
let somadasnotas = 0;

for (let i = 0; i < notas.length; i++) {
    somadasnotas += notas[i];
}

let media = somadasnotas / notas.length;

if (media >= 7) {
    console.log("Aprovado a media foi de:" +media);
    } 
    else{ (media < 7) 
    console.log("Reprovado a media foi de: " +media);

    }
