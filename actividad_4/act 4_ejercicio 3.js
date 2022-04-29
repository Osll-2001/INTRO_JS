var numero=Number(prompt("Digite un numero"));
var contador=1;
var numMult="";
do{
    if((contador%5)==0) numMult=numMult+" "+contador;
    contador++;
}while(contador<=numero);

console.log(numMult);