/*Escriba una función de JavaScript que tomará una serie de números almacenados
 * y encontrará el segundonúmeros más bajos y segundos más altos,*/
const arr = [3,4,6,1,5,2,9,10,23,12];

function getNumeros(arr){
    arr.sort(function(a, b) {return a - b;});
    return "El segundo mas bajo: "+ arr[1]+ " Y El segundo mas alto: "+arr[arr.length-2]; 
}
console.log(getNumeros(arr));