// 1.Función para convertir minutos a segundos
function minutosASegundos(minutos) {
    return minutos * 60;
  }
  
  // Ejemplo de uso
  var minutos = 5;
  var segundos = minutosASegundos(minutos);
  
  console.log(minutos + " minutos es igual a " + segundos + " segundos.");


//2. Función para mostrar el número siguiente de un número dado
function nextNumber (number){
    return number + 1;
  }
  //Ejemplo de uso
  var number = 1;
  var nextNumber = nextNumber(number);
  console.log(nextNumber + " es el número que le sigue a " + number + ".");

//3. Función para calcular el área de un triángulo
function triangleArea (base, height){
   return base * height / 2;
  }
  //Ejemplo de uso
  var base = 4;
  var height = 4;
  var triangleArea = triangleArea(base,height);
  console.log("El área del triángulo de base " + base + " y altura " + height + " es: " + triangleArea);


//4. Función para convertir edad de años a días
function ageToDays (age){
    return age * 365;
  }
  //Ejemplo de uso
  var age = 27
  var days = ageToDays(age);
  console.log("Tu edad de " + age + " años es equivalente a " + days + " días ☺");

//5. Función para cálculo de potencia eléctrica
function powerCalc(V, I){
  return V * I;
  }
  //Ejemplo
  var V = 110;
  var I = 3;
  var P = powerCalc(V,I);
  console.log("La potencia eléctrica generada por " + V + " volts " + " y " + I + " amperes es: " + P + " watts.");


//6. Función retorno de "algo" en una oración
function algo(frase){
    return "Algo" + frase;
  }
  //Ejemplo
  var frase = " ocurrió aquel día."
  var frase2 = algo(frase);
  console.log("La frase es: " + frase2);


//7. Función de suma de águlos de polígonos
function sumAngInt (numLadPolig){
    return 180  * (numLadPolig - 2) 
  } 
  //Ejemplo
  var numLadPolig = 6;
  var sumAngInt = sumAngInt (numLadPolig);
  console.log("La suma de los ángulos internos del polígono regular de " + numLadPolig + " lados es: " + sumAngInt);


//Función para convertir hora y minutos a segundos
function getSeconds (hours, minuts){
  return hours * 3600 + minuts * 60;
  }
  //Ejemplo
  var hours = 1;
  var minuts = 30;
  var seconds = getSeconds(hours,minuts);
  console.log("La suma de " + hours + " horas y " + minuts + " minutos, convertida a segundos es: " + seconds);
  //console.log("La suma de " + hours + " horas y " + minuts + " minutos, convertida a segundos es: " + getSeconds(hours,minuts)); //se puede hacer directo con la función y los parámetros o con la variable que ya usó la función previamente.
