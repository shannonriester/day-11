// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.
function sum (num1, num2){
  return num1 + num2  ;
}

sum();

// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.
function avg(num1, num2, num3) {
   return (num1 + num2 + num3)/3;
}

avg();

// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

function getLength(string){
  return string.length;
}

getLength();


// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.

function greaterThan(num1, num2) {
  if (num2 > num1) {
    return true;
  }
  else {
    return false;
  }
}

greaterThan();
//returns true

// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.

function greet(name){
  return 'Hello, ' + name + '!';
}

greet();

// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"

function madLib(verb, adVerb, noun, hwGrade){
  var sentence = 'Shannon ' + verb + ' her ' + noun + ' as ' + adVerb + ' as possible in order to get all ' + hwGrade + 's!';
  return sentence;
}

madLib();
///
