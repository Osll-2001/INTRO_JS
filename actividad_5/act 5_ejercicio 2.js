var arreglo=[];
var contador=0;
while(contador<=4){
    arreglo[contador]=prompt("Elemento "+(contador+1)+ " del arreglo: ");
    contador++;
}

console.log("Elementos del arreglo: ",arreglo.toString());