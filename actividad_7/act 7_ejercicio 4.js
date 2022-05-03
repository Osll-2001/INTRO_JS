function conversion(tipo,grados){
    if(tipo=='celsius'){
        var convert=(grados*1.8)+32;
        return "El resultado es: "+parseFloat(convert)+"°F";
    }
    else if(tipo=='fahrenheit'){
        var convert=(grados-32)/1.8;
        return "El resultado es: "+parseFloat(convert)+"°C";
    }
}
var tipo=prompt("Que Grados tiene Celsius o Fahrenheit");
var grados=prompt("Cuantos grados son: ");

alert(conversion(tipo,grados));
