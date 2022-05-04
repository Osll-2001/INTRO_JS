function conversion(tipo,grados){
    if(tipo=='celsius'){
        let convert=(grados*1.8)+32;
        return "El resultado es: "+parseFloat(convert)+"°F";
    }
    else if(tipo=='fahrenheit'){
        let convert=(grados-32)/1.8;
        return "El resultado es: "+parseFloat(convert)+"°C";
    }
}
let tipo=prompt("Que Grados tiene Celsius o Fahrenheit");
let grados=prompt("Cuantos grados son: ");

alert(conversion(tipo,grados));
