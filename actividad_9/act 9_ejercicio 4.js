/*Escriba un programa de JavaScript para eliminar la propiedad rollno del siguiente objeto. 
 * Imprima también el objeto antes o después de eliminar la propiedad. */
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
console.log(student);
delete student.rollno;
console.log(student);