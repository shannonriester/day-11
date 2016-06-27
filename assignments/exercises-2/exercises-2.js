// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(num1, num2){
    if (num1 > num2) {
      return num1;
    }
    else if (num2 > num1) {
      return num2;
    }
    else if (num1 === num2) {
      return num1 + ' and ' + num2 + ' have the same value';
    }
}

console.assert(max(1,2) === 2, 'two should be greater than 1');

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1, num2, num3){
  if (num1 >= num2 && num1 >= num3) {
    console.log(num1);
    // return num1;
  }
  else if (num2 >= num1 && num2 >= num3) {
    return num2;
  }
  else if (num3 >= num1 && num3 >= num2) {
    return num3;
  }
  else {
    return 'error';
  }
}

console.assert(maxOfThree(1,2,3) === 3, 'three should be the greatest number of one, two, three');

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      return true;
    }
    else {
      return false;
    }
}

console.assert(isVowel('a') === true, ' the letter a should return true');

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
  phrase = phrase.toLowerCase();
  var phraseArr = phrase.split('');
  var vowels;
  var consonants;
  var punctuation;
  var newRovarPhrase ='';

  for (i = 0; i < phraseArr.length; i++) {
    if (phraseArr[i] === 'a' || phraseArr[i] === 'e' || phraseArr[i] === 'i' || phraseArr[i] === 'o' || phraseArr[i] === 'u') {
      vowels = phraseArr[i];
      newRovarPhrase += vowels.concat();
    }
    else if (phraseArr[i] === ' ' || phraseArr[i] === '.' || phraseArr[i] === '!' || phraseArr[i] === ',' || phraseArr[i] === '\'') {
      punctuation = phraseArr[i];
      newRovarPhrase += punctuation.concat();
    }
    else {
      consonants = phraseArr[i] + 'o' + phraseArr[i];
      newRovarPhrase += consonants.concat();
    }
  }
  console.log(newRovarPhrase);
}
rovarspraket('hi, my name is Shannon!');

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(revPhrase){
   return revPhrase.split('').reverse().join('');
}

reverse('shannon is here to be reversed');
