/* * Dadas dos matrices de enteros,
  * encuentra qué elementos faltan en la segunda matriz
  * de la primera matriz.
*/

matriz = [7,2,5,3,5,3];
br = [7,2,5,4,6,3,5,3];

function faltantes(array1,array2){
    const arrayFaltantes=[];
    array2.forEach(element => {
        if(!array1.includes(element)) arrayFaltantes.push(element);
    });
    return arrayFaltantes;
}

const result=faltantes(matriz,br);
console.log(result);