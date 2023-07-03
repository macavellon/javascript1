
// Ejercicio 1: 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar

const parimpar=(num)=> {
  if (num%2==0) {
      console.log("El numero es par");
      }
      else {
          console.log("El numero es impar");
      }
  }

parimpar(5)

// Ejercicio 2: Crear una función que reciba dos números por parámetro 
// e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

const mayormenor =(num2,num3)=> {
  if (num2>num3) {
      console.log ("El primer numero es mayor al segundo");
  }
      else if (num2<num3) {
              console.log ("El segundo numero es mayor al primero");
                          }
              else {
                  console.log("Los numeros son iguales")
              }
          
          }

mayormenor(2,4)


// Ejercicio 3 : Crear una función que reciba un número por parámetro e indique en consola 
// si ese número es múltiplo de 5.


const multiplocinco = (num4) => {
  if (num4%5==0) {
      console.log("El numero es multiplo de 5");
  }
  else { console.log("El numero no es multiplo de 5");
}
}

multiplocinco(5)



// Ejercicio 4: Crear una función que reciba un número
//  por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

const hastanumeros = (num5) => {
  for (i=0; i<=num5; i++) {
      console.log (i);
  }
}

hastanumeros(10);

// Ejercicio 5: Crear una función que reciba una palabra y 
// un número por parámetro e imprima por consola  esa palabra la cantidad de veces correspondiente al número indicado. 

const palanum = (num6,pala) => {
  for (j=1; j<=num6 ; j++) {
      console.log (pala);
  }
}

palanum(5,"hola")


// Ejercicio 6 : Crear una función que reciba 
// un array por parámetro e imprima por consola todos los valores de ese array.


const imprarray = (array) => {
  for (let k = 0; k < array.length; k++) {
    console.log(array[k]);
  }
}

const arrayc = ['pera', 'manzana', 'banana', 'limon'];
imprarray(arrayc);

//  Ejercicio 7 : Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos
//  el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

const imprarray2 = (array2) => {
  array2.splice(4,1);
      for (let k = 0; k < array2.length; k++) {
          console.log(array2[k])
      }
}

const arrayc2 = [2,4,5,6,7,11,1,2,3,4];
imprarray2(arrayc2);


//   Ejercicio 8:  Crea una función que reciba un array de números y un número
//    por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

const arraynum= (array3,num7) => {
  for (let h=0 ; h<array3.length ; h++) {
      console.log("Numeros del array multiplicados por el otro numero" , array3[h]*num7)
  }
}
const arrayc3 =[1,2,3]
arraynum(arrayc3,4);
