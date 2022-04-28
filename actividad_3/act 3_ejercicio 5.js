var num1=Number(prompt("Digite el primer numero"));
var num2=Number(prompt("Digite el segundo numero"));
var num3=Number(prompt("Digite el tercer numero"));

if(num1==num2 || num1==num3 || num2==num3){
    if(num2==num3) {
        if(num1>num2) alert("El Num1: ("+num1+ ") Es el mayor");
        else alert("El Num2: ("+num2+ ") Es el mayor el cual es igual al Num3");
    }else if(num1==num2){
        if(num3>num2) alert("El Num3: ("+num3+ ") Es el mayor");
        else alert("El Num1: ("+num1+ ") Es el mayor el cual es igual al Num2");
    }else if(num1==num3){
        if(num2>num1) alert("El Num2: ("+num2+ ") Es el mayor");
        else alert("El Num1: ("+num1+ ") Es el mayor el cual es igual al Num3");
    }
}
else{
    if(num1>num2 && num1>num3) alert("El Num1: ("+num1+ ") Es el numero mayor");
    else if(num2>num1 && num2>num3)  alert("El Num2: ("+num2+ ") Es el numero mayor");
    else if(num3>num1 && num3>num1)  alert("El Num3: ("+num3+ ") Es el numero mayor");   
}