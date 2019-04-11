//Use 2 spaces for indentation.

function hello (name) {
  console.log('hi', name)
}
  
//Use single quotes for strings except to avoid escaping.
  
console.log('hello there')
$("<div class='box'>")
  
//No unused variables.
  
function myFunction () {
  var result = something()   // ✗ avoid
}
  
//Add a space after keywords.
  
if (condition) { ... }   // ✓ ok
if(condition) { ... }    // ✗ avoid
 
//Add a space before a function declaration's parentheses.
  
function name (arg) { ... }   // ✓ ok
function name(arg) { ... }    // ✗ avoid
   
run(function () { ... })      // ✓ ok
run(function() { ... })       // ✗ avoid
  
//Always use === instead of ==.
//Exception: obj == null is allowed to check for null || undefined.
  
  
if (name === 'John')   // ✓ ok
if (name == 'John')    // ✗ avoid
  
if (name !== 'John')   // ✓ ok
if (name != 'John')    // ✗ avoid  
  
//Multiple blank lines not allowed.
  
// ✓ ok
var value = 'hello world'
console.log(value)
  
  
  
// ✗ avoid
var value = 'hello world'
console.log(value)
  
//For var declarations, write each declaration in its own statement.
  
// ✓ ok
var silent = true
var verbose = true
   
// ✗ avoid
var silent = true, verbose = true
   
// ✗ avoid
var silent = true,
    verbose = true
  
//Add spaces inside single line blocks.
  
function foo () {return true}    // ✗ avoid
function foo () { return true }  // ✓ ok
  
//Use camelcase when naming variables and functions.
 
function my_function () { }    // ✗ avoid
function myFunction () { }     // ✓ ok
   
var my_var = 'hello'           // ✗ avoid
var myVar = 'hello'            // ✓ ok
  
//Trailing commas not allowed.
  
var obj = {
  message: 'hello',   // ✗ avoid
}
  
