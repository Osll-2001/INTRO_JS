var numbers=[1,2,3,4,10,11];
function sumaNumeros(numbers){
    var total=0;
    for (let i = 0;i< numbers.length;i++) {
        total=total+numbers[i];
    }
    return "La suma de todos los elementos es igual a: "+total;
}

var result=sumaNumeros(numbers);
console.log(result);