var nombre=prompt("dime tu nombre:");
var edad=prompt("dime tu edad:");

if(edad>=18){
    if(nombre=="Mario" || nombre=="Carlos") alert("Puedes entrar y aparte tienes un pase VIP");
    else alert("Puedes pasar");
}
else{
    alert("No puedes pasar");
}
