# JS Scoping exercises

1. What’s the result of executing this code and why.
  ```js
  function test() {
     console.log(a);
     console.log(foo());
     
     var a = 1;
     function foo() {
        return 2;
     }
  }
  
  test();
  ```

> undefined
  2
  porque() cuando imprimimos la variable a aun no esta definida y el 2 porque al momento de llamar a la funcion anidada foo este retorna 2.
> undefined
  2


2. What is result?
  ```js
  var a = 1; 
  
  function someFunction(number) {
    function otherFunction(input) {
      return a;
    }
    
    a = 5;
    
    return otherFunction;
  }
  
  var firstResult = someFunction(9);
  var result = firstResult(2);
  ```
> la variable 'result' valdría 5. 
> undefined


3. What is the result of the following code? Explain your answer.
  ```js
  var a = 1
  function foo() {
    var a = 2;

    function bar() {
      console.log( a );
    }

    return bar;
  }
  var baz = foo();
  baz();
  ``` 
> 2, porque al principio la variable vale 1 pero al entrar a la función se le asigna el valor de 2 la cual crea una función anidada (la cual imprime en consola el valor de a) y esta función es la que se retorna como tal en la función principal, la cual se manda a llamar asignandolo a una variable (baz) el cual toma el valor de la función bar y al momento de mandar llamar a la variable (la cual se vuelve función) imprime en consola el 2. 
>2


4. What will you see in the console for the following example?
  ```js
  var a = 1; 
  function b() { 
      a = 10; 
      return; 
      function a() {} 
  } 
  b(); 
  ```

> undefined, porque no se retorna nada.
> undefined