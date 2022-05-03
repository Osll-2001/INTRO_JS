var palabra="Bob";

function comprobarPalindromo(palabra){
    const palabraAlReves=palabra.split("").reverse();
    const palabraNormal=palabra.split("");
    let cont=0;
    for(let i=0;i<palabraAlReves.length;i++){
        if(palabraNormal[i].toLowerCase()!=palabraAlReves[i].toLowerCase()) return "No es un palindromo";
        else cont=1;
    }
    if(cont==1) return "Es un palindromo";
}

var result=comprobarPalindromo(palabra);
console.log(result);
