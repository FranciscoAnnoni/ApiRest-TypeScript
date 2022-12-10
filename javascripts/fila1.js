//----------------------- JAVASCRIPTS COMANDOS ---------------------//
// tipos de valores

const constanteString = "hola";
const constanteNumerica = 1;  

let variableString = "hola";
let variableNumerica =1;

var variable2 = 1; 


// Objetos
const mycar = {
    make: 'Honda',
    model: 'Accord',
    year: 1998,
  };

const hola = mycar.make;

// para llamar a los objetos

const hola2 = "make";

const hola3 = mycar[hola2];


//Colecciones - listas
const lista = [1,2,3,4,5];
//funciones con listas
let nuevaLongitud = frutas.unshift('Fresa'); // Añade al inicio
let inicio = frutas.push('Fresa'); // Añade al final

let primero = frutas.shift(); // Elimina del inicio
let ultimo = frutas.pop(); // Elimina del final
let valor = array.splice(i, 1); //Elimina un lugar puntual (i= indica el lugar, 1= indica la cantidad)
let pos = frutas.indexOf('Banana') // la posición de un objeto


///------------------------- fuinciones ---------------------//
//aleatorios
const valorAleatorio =  Math.random();
const valorAleatorioRango = Math.floor(Math.random() * 20);

// pasa A integer

const a = parseInt("007");




// ------------------ Funciones ------------------//
//if
function findGreater(a, b) {
    if(a > b) {
      return "a is greater";
    }
    else {
      return "b is greater or equal";
    }
  }

//simplificacion
function findGreater(a, b) {
    return a > b ? "a is greater" : "b is greater or equal";
}
///The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns true, and c is the code to run when the condition returns false.

//for

//while

//do while  

//sewitch
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}


//recursividad
function countdown(n){
    if (n < 1) {
      return [];
    } else {
      const countArray = countdown(n - 1);
      countArray.unshift(n);
      return countArray;
    }
  
  }
