function helloWorld() {
  console.log('Hello World');
}
helloWorld();


function helloWorldPraram(name, age) {
  // console.log(name); -- this shows up as 'undefined' because no vale was declared to the 'name' variable/parameter
  // the name up here, is the parameter
  console.log('Hello, world!');
  // console.log(name);
  // console.log(age);

//if name is coerced into a 'true' boolean, then it will run that code
  if (name) {
    console.log('Hello, ' + name);
  }
  else {
    console.log('Hello, World!');
  }
}
helloWorldParam('Jess', 32); //assigned the value in the function call
// down here, the name is the argument
//if you pass in more arguments into the called function, JS will only take note of the arguments that are first declared
  //so if you do, helloWorldParam('Jess', 32, 'blue');
  // 'blue' will be ignored


function helloWorldReturn (name, age) {
  if (name) {
    return 'Hello, ' + name;
  }
  else {
    return 'Hello, World!';
  }
}

var greeJess = helloWorldReturn('Jess');
  //the return value is "Hello, Jess"
var greetShannon = helloWorldReturn('Shannon');
  // the return value is "Hello, Shannon"
