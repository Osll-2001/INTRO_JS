let result="";
let resultadoF=0;
let num1=0;
let num2=0;
let operador="";
let op=document.getElementById("operacion");
let cero=document.getElementById("0");
let uno=document.getElementById("1");
let dos=document.getElementById("2");
let tres=document.getElementById("3");
let cuatro=document.getElementById("4");
let cinco=document.getElementById("5");
let seis=document.getElementById("6");
let siete=document.getElementById("7");
let ocho=document.getElementById("8");
let nueve=document.getElementById("9");
let punto=document.getElementById("punto");
let ac=document.getElementById("ac");
let del=document.getElementById("del");
let suma=document.getElementById("suma");
let resta=document.getElementById("resta");
let division=document.getElementById("divis");
let multiplicacion=document.getElementById("multi");
let igual=document.getElementById("igual");

//NUMEROS
cero.onclick=function(){
    result=result+"0";
    op.append("0");
}
uno.onclick=function(){
    result=result+"1";
    op.append("1");
};
dos.onclick=function(){
    result=result+"2";
    op.append("2");
};
tres.onclick=function(){
    result=result+"3";
    op.append("3");
};
cuatro.onclick=function(){
    result=result+"4";
    op.append("4");
};
cinco.onclick=function(){
    result=result+"5";
    op.append("5");
};
seis.onclick=function(){
    result=result+"6";
    op.append("6");
};
siete.onclick=function(){
    result=result+"7";
    op.append("7");
};
ocho.onclick=function(){
    result=result+"8";
    op.append("8");
};
nueve.onclick=function(){
    result=result+"9";
    op.append("9");
};
punto.onclick=function(){
    result=result+".";
    op.append(".");
}

//BORRAR
ac.onclick=function(){
    result="";
    op.textContent="";
    num1=0;
    num2=0;
    resultadoF=0;
};
del.onclick=function(){
    let arrayResult=result.split("");
    result="";
    arrayResult.pop();
    arrayResult.forEach(element => {
        result=result+element;
    });
    op.textContent=result;
}

//operaciones
suma.onclick=function(){
    num1=result;
    result="";
    operador="suma";
    op.textContent="";
}
resta.onclick=function(){
    num1=Number(result);
    result="";
    operador="resta";
    op.textContent="";
}
multiplicacion.onclick=function(){
    num1=Number(result);
    result="";
    operador="multi";
    op.textContent="";
}
division.onclick=function(){
    num1=Number(result);
    result="";
    operador="division";
    op.textContent="";
}

igual.onclick=function(){
    num2=Number(result);
    if(operador=="suma") resultadoF=Number(num1)+Number(num2);
    else if(operador=="resta")resultadoF=num1-num2;
    else if(operador=="multi")resultadoF=num1*num2;
    else if(operador=="division")resultadoF=num1/num2;
    op.textContent=resultadoF;
    result=resultadoF;
}
