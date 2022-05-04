//Crea un código para llenar un objecto vacio:

const objeto = {}

Object.defineProperties(objeto, {
    "color": {
      enumerable:true
    },
    "tamaño": {
      enumerable:true
    },
    "peso": {
        enumerable:true
      },
      "cantidad": {
        enumerable:true
      }  
  });

  console.log(objeto);