# Day-11

## Function
- block of code that does stuff
### Syntax:
  - **Hoisting:**
    ```js
    //function declaration (scoped as global, within their scope)
    function myFunction (){}

    //not hoisted to to top in the same way...this is globally scoped immediately in JS
    //the var myFunction; is lifted to top, and changes the order that the code is run
    var myFunction = function(){};
    ```
  - var assignment is not hoisted to the top
  - calling the function at the end of the script
    `myFunction();`

- **Parameters:**
  - what goes inside the ()s of a function declaration
  - locally defined variables, aka labels for values, that the functino might use
  - scoped _LOCALLY_ to the function
- **Arguments:**
  - what goes inside the () of a function _call_ / _invocation_
  - in mainEX.js, it's the 'name' and 'age' :
    `helloWorldParam(name, age)`
- "BANG" = not operator
    - `!name`
- **Return statements**
  - VALUE OF FUNCTION CALLS
    - functions that have no return value ONLY perform side effects, aka they DO stuff but have undefined value
    - the default value of functions is `undefined` (like variables)
    - the function needs to have a ***RETURN*** value, in order for a function call to have a value other than undefined
    - `helloWorldReturn('jess');`
      - evaluates fully (in console) and only shows "Hello, Jess"
      - evaluation vs. declaration  - function calls by default evaluate to undefined- they will evaluate to their return value if they have one
      - function declarations always evaluate to undefined, just like var declarations

### More about TYPES
1. number operators
  - `'+ - / *'`
  - `++` increment operator
  - `--` decrement operator
2. string props/methods
  - `string.length`
  - **METHODS** are properties that are also functions...
    - stringArray[0].split('')
    - could use the .split() in day09 calculator like this:
    ```js
    var splitArr = eqnArray.split(breakOpr);
    ```
3. array properties/methods
    - arr.length
      - pretty much the only one that isn't a method/doesn't need ()s
    - array methods will often mutate the array
      - arr.push('karly');
        - returns new value, and also changes the actual array itself. the var arr=["stuff in here"] now _permanently_ becomes arr=["stuff in here" + 'karly']
      - arr.concat('karly');
        --returns 'karly' in the arr: ["stuff in here", karly]
        --does **NOT** mutate the original var arr value
4. Pass by Reference
  - Primitive Values
    - lables that point to primitive values store THE VALUE not a reference to it
    - they forget where they got their value from  
        ``` js
        var a = 0;
        var b = a;
        a = 1;
        b //evaluates to 0
        ```
5. Pass by Value
  - Non-Primitive TYPES
    - not so for arrays and objects. they store a reference
        ``` js
        var a = [1, 2, 3];
        var b = a;
        a[0] = 5;
        a; //evaluates to [5,2,3]
        b //evaluates to [5,2,3]
        ```

### Built-in objects
  1. Document object
  2. HTML element object
  3. Event object
      - `.addEventListener('', function(){});`
      - passed into the functions by our browser, by default
      - evt.target
  4. Math object
    - does math for you!
    - Math.PI
    - Math.random()
      - gives random number btwn 0-1
    - Math.floor (rounds down); Math.ceil(Math.random()); Math.round(Math.random() * 10);
  5. window.
    - declaring global variables
    - window.location.pathname
    - 'window' is basically the js script window
      - the path to the file that currently looking at
6. Location/hash


## Resources
- [String docs] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String);
