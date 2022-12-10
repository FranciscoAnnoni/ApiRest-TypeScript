/*
Convert the given number into a roman numeral.

Roman numerals	Arabic numerals
M	1000
CM	900
D	500
CD	400
C	100
XC	90
L	50
XL	40
X	10
IX	9
V	5
IV	4
I	1
All roman numerals answers should be provided in upper-case.
*/

function unidad(num){

    switch(num) {
        case "0" :
            return "";
        case "1" :
          return 'I';
        case "2":
          return 'II';
        case "3":
          return 'III'; 
        case "4":
          return 'IV';
        case "5":
          return 'V';
        case "6":
            return 'VI';
        case "7":
            return 'VII';
        case "8":
            return 'VIII';
        case "9":
            return 'IX';
      }
}

function decena(num){

    switch(num) {
        case '0':
          return '';
        case "1" :
          return 'X';
        case '2':
          return 'XX';
        case '3':
          return 'XXX'; 
        case '4':
          return 'XL';
        case '5':
          return 'L';
        case '6':
            return 'LX';
        case '7':
            return 'LXX';
        case '8':
            return 'LXXX';
        case '9':
            return 'XC';
      }
}

function centena(num){

    switch(num) {
        case '0':
          return '';
        case '1' :
          return 'C';
        case '2':
          return 'CC';
        case '3':
          return 'CCC'; 
        case '4':
          return 'CD';
        case '5':
          return 'D';
        case '6':
            return 'DC';
        case '7':
            return 'DCC';
        case '8':
            return 'DCCC';
        case '9':
            return 'CM';
      }
}


function milesima(num){

    switch(num) {
        case '1' :
          return 'M';
        case '2':
          return 'MM';
        case '3':
          return 'MMM'; 
}
}


function convertToRoman(num) {
 let tipoNum = num.toString().length;
 let numero = num.toString();
 console.log(tipoNum);
 let numeroEnRomano = "";
 if (tipoNum == 1){
    numeroEnRomano = unidad(numero);
 
 } else if (tipoNum == 2){
    numeroEnRomano = decena(numero[0]) + unidad(numero[1]);
 } else if (tipoNum == 3){
    numeroEnRomano = centena(numero[0]) + decena(numero[1]) + unidad(numero[2]) ;
 } else if (tipoNum == 4){
    numeroEnRomano = milesima(numero[0])+ centena(numero[1]) + decena(numero[2]) + unidad(numero[3]) ;
 }
 return numeroEnRomano;
}

console.log(convertToRoman(3999));




