const oracion="Hola mundo desde javascript";
const palabra="mundo";

function buscar(oracion,palabra){
    let cont=0;
    let arrayPalabras = oracion.split(" ");
    for(let i=0;i<arrayPalabras.length;i++){
        if(arrayPalabras[i].toLowerCase()==palabra.toLowerCase()) return true;
        else cont=1;
    }
    if(cont==1) return false;
}

let result=buscar(oracion,palabra);
console.log(result);