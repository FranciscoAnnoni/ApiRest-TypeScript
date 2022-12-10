/*
Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
*/

function palindrome(str) {
    const lowercase = str.toLowerCase();
    var array = Array.from(lowercase);
    console.log(array);
    const arrayNotPermit = ['',' ','*','-','_',',','.',':',';','|','/',', ','(',')'];
    for (let i =0; i < array.length ; i++){
    for(let j =0; j < arrayNotPermit.length ; j++){
        if(array[i] == arrayNotPermit[j]){
            array.splice(i, 1); 
            j = 0;
        }

    }    
    }
    const finaly = array.join('');
    console.log(finaly);
    console.log(finaly.split('').reverse().join(''));
    return finaly==finaly.split('').reverse().join('')
 
  }
  palindrome("0_0 (: /-\ :) 0-0");



/* dado por otro chico mucho mas sensillo 

  function palindrome(str) {

    let regex=/[A-Za-z0-9]+/g
    let target=str.match(regex).join('').toLowerCase()
        return target==target.split('').reverse().join('')
    
}
palindrome("eye");
*/