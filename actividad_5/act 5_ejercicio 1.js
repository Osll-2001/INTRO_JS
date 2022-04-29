var arrayNums=[1,4,6,10,22,55,46,2,5,0];
var numsMayores="";

for (let i = 0; i < arrayNums.length; i++) {
    if(arrayNums[i]>3) numsMayores=numsMayores+" "+arrayNums[i];
}
console.log("Elementos del array original: ", arrayNums.toString());
console.log("Elementos mayores a 3: ",numsMayores);