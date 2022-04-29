var numero=Number(prompt("Digite un numero"));
var contador=1;
var numMult="";
while(contador<=numero){
    if((contador%5)==0) numMult=numMult+" "+contador;
    contador++;
}
console.log(numMult);

