//FUNCIONES POR DECLARACIÓN
console.log("FUNCIONES POR DECLARACIÓN:")
// 1.Función para convertir minutos a segundos
function minutosASegundos(minutos) {
    return minutos * 60;
  }
  
  // Ejemplo de uso
  var minutos = 5;
  var segundos = minutosASegundos(minutos);
  
  console.log("1. " + minutos + " minutos es igual a " + segundos + " segundos.");


//2. Función para mostrar el número siguiente de un número dado
function sigNum (num){
    return num + 1;
  }
  //Ejemplo de uso
  var num = 1;
  var sigNum = sigNum(num);
  console.log("2. " + sigNum + " es el número que le sigue a " + num + ".");

//3. Función para calcular el área de un triángulo
function areaTrian (base, altura){
   return base * altura / 2;
  }
  //Ejemplo de uso
  var base = 4;
  var altura = 4;
  var areaTrian = areaTrian(base,altura);
  console.log("3. El área de un triángulo de base " + base + " y altura " + altura + " es: " + areaTrian + " unidades cuadradas.");


//4. Función para convertir edad de años a días
function añosADías (años){
    return años * 365;
  }
  //Ejemplo de uso
  var años = 27
  var días = añosADías(años);
  console.log("4. Tu edad de " + años + " años es equivalente a " + días + " días.");

//5. Función para cálculo de potencia eléctrica
function calcPot(V, I){
  return V * I;
  }
  //Ejemplo
  var V = 110;
  var I = 3;
  var P = calcPot(V,I);
  console.log("5. La potencia eléctrica generada por " + V + " volts " + "y " + I + " amperes es: " + P + " watts.");


//6. Función retorno de "algo" en una oración
function algo(frase){
    return "Algo" + frase;
  }
  //Ejemplo
  var frase = " ocurrió aquel día."
  var frase2 = algo(frase);
  console.log("6. La frase es: " + frase2);


//7. Función de suma de águlos de polígonos
function sumAngInt (numLadPolig){
    return 180  * (numLadPolig - 2) 
  } 
  //Ejemplo
  var numLadPolig = 6;
  var sumAngInt = sumAngInt (numLadPolig);
  console.log("7. La suma de los ángulos internos de un polígono regular de " + numLadPolig + " lados es: " + sumAngInt + "°.");


//8. Función para convertir hora y minutos a segundos
function calcSeg (hrs, min){
  return hrs * 3600 + min * 60;
  }
  //Ejemplo
  var hrs = 1;
  var min = 30;
  var seg = calcSeg(hrs,min);
  console.log("8. La suma de " + hrs + " horas y " + min + " minutos, convertida a segundos, es: " + seg + ".");
  //console.log("La suma de " + hours + " horas y " + minuts + " minutos, convertida a segundos es: " + getSeconds(hours,minuts)); //se puede hacer directo con la función y los parámetros o con la variable que ya usó la función previamente.
  //console.log(`La suma de ${hours} hora(s) y ${minuts} minuto(s), convertida a secundos es: ${seconds}`);

//=TRANSFORMACIÓN a funciones de TUPO FLECHA=
console.log(" ")
console.log("TRANSFORMACIÓN A FUNCIONES DE TIPO FLECHA:");

// 1.Función para convertir minutos a segundos
const minToSec = (min) => {
  return min * 60;
}
var min = 5;
let sec = minToSec (min);
console.log(`1. ${min} minuto(s) es(son) igual a ${sec} segundos.`);

//2. Función para mostrar el número siguiente de un número dado
const nextNum = (number) => {
  return number + 1;
}
var number = 1;
let nextNumb = nextNum(number);
console.log(`2. ${nextNumb} es el número que le sigue a ${number}.`)

//3. Función para calcular el área de un triángulo
const trianArea = (bas, height) => {
  return bas * height / 2;
 }
 //Ejemplo de uso
 var bas = 4;
 var height = 4;
 let triangleArea = trianArea(bas,height);
 console.log(`3. El área de un triángulo de base ${bas} y altura ${height} es ${triangleArea} unidades cuadradas.`);

 //4. Función para convertir edad de años a días
const ageToDays = (age) => {
  return age * 365;
}
//Ejemplo de uso
var age = 27
let days = ageToDays(age);
console.log(`4. Tu edad de ${age} años es equivalente a ${days} días. `);


//5. Función para cálculo de potencia eléctrica
const powerCalc = (V, I) => {
  return V * I;
  }
  //Ejemplo
  //var V = 110;
  //var I = 3;
  let pwr = powerCalc(V,I);
  console.log(`5. La potencia eléctrica generada por ${V} volts y ${I} amperes es: ${pwr} watts.`);

//6. Función retorno de "algo" en una oración
const something = (phrase) => {
  return '"Something' + phrase;
}
//Ejemplo
var phrase = ' happened that day".'
let phrase2 = something(phrase);
console.log(`6. The phrase is: ${phrase2}`);


//7. Función de suma de águlos de polígonos
const sumIntAng = (poligFacesNum) => {
  return 180  * (poligFacesNum - 2) 
} 
//Ejemplo
var poligFacesNum = 6;
let sumIntAngles = sumIntAng (poligFacesNum);
console.log(`7. La suma de los ángulos internos de un polígono regular de ${poligFacesNum} lados es: ${sumIntAngles}.`);


//8. Función para convertir hora y minutos a segundos
const getSeconds = (hours, minuts)=> {
return hours * 3600 + minuts * 60;
}
//Ejemplo
var hours = 1;
var minuts = 30;
var seconds = getSeconds(hours,minuts);
console.log(`8. La suma de ${hours} hora(s) y ${minuts} minuto(s), convertida a secundos, es: ${seconds}.`);