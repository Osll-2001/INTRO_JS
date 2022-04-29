var animals=['eagle','parrot','monkey','boar','lion'];
var comingSoonAnimals=['panter','dragon','turtle'];

//Concatenar los arrays
var allAnimals=animals.concat(comingSoonAnimals);
console.log("Nuevo array con los 2 array concatenados: ",allAnimals);

// Acomoda el arreglo de menor a mayor
var arr=[4,6,1,0,8,2];
console.log("Arreglo desordenado: ",arr);
console.log("Arreglo ordenado: ",arr.sort());

//Agregar un nuevo animal('cow') al arreglo animals
console.log("Array animals inicial: ",animals);
animals.push('cow');
console.log("Array con el elemento('cow') agregado: ",animals);

//Retira el elemento eagle del arreglo animals
console.log("Array animals: ",animals);
animals.shift();
console.log("Array con el elemento('eagle') eliminado: ",animals);