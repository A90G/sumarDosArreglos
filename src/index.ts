/*•Hacer la suma de dos arreglos y dejarlo en
otro arreglo
• La dimensión de los arreglos es solicitada al
usuario
• Los dos arreglos son cargados al azar*/
let dimensionArreglo: number = Number(
  prompt(`Ingrese la dimensión del arreglo:`)
);
// la dimensiòn es solicitada al usuario
let arreglo1: number[] = new Array(dimensionArreglo);
let indice1: number;

for (indice1 = 0; indice1 < dimensionArreglo; indice1++) {
  arreglo1[indice1] = Math.round(Math.random() * 50);
  console.log(`El número en la posición ${indice1} es: ${arreglo1[indice1]}`);
}
// la carga de los arreglos es aleatoria
let arreglo2: number[] = new Array(dimensionArreglo);
let indice2: number;

for (indice2 = 0; indice2 < dimensionArreglo; indice2++) {
  arreglo2[indice2] = Math.round(Math.random() * 10);
  console.log(`El número en la posición ${indice2} es: ${arreglo2[indice2]}`);
}
function suma(arreglo1: number[], arreglo2: number[]): number[] {
  let resultado: number[] = [];
  for (let i = 0; i < arreglo1.length; i++) {
    resultado[i] = arreglo1[i] + arreglo2[i];
  }
  return resultado;
}
//resultado es otro arreglo asi que cumple
console.log("la suma de los arreglos es:", suma(arreglo1, arreglo2));
