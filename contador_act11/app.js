let contador=0;
let SpanContador=document.getElementById("contador");

function incrementar(){
    contador++;
    SpanContador.textContent=contador;
}
function decrementar(){
    if(!contador<=0){
        contador--;
        SpanContador.textContent=contador;
    }
}
function reset(){
    contador=0;
    SpanContador.textContent=contador;
}