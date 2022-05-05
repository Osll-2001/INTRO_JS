/*Hacer una función para que reciba ese arreglo de objetos
y que retorne la suma de "a" y "b" de cada objeto y concatenarlo
al String "name"*/

const coleccion = [
    {a: 11, b:224, name: "M48 Bulldog"},
    {a:23, b:56, name: "Object 140"},
    {a: 32, b:75, name: "T57 Heavy"}
];

let sumaS="";
coleccion.forEach(element => {
    sumaS=sumaS+" "+(element.a+element.b)+" "+element.name+" -=-";
}); 

 console.log(sumaS);