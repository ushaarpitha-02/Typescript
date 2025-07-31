//Data types in TypeScript
//number, string, boolean, any, void, null, undefined, object
//number
var num = 10;
console.log("Number:", num);
//string
var str = "Hello, TypeScript!";
console.log("String:", str);
//boolean
var isActive = true;
console.log("Boolean:", isActive);
//any
var anything = "Can be anything"; //this can be any type and stores any value
anything = 42; // can also be a number
console.log("Any:", anything);
anything = { key: "value" }; // can also be an object
console.log("Any (object):", anything);
anything = [1, 2, 3]; // can also be an array
console.log("Any (array):", anything);
anything = null; // can also be null
console.log("Any (null):", anything);
anything = undefined; // can also be undefined
console.log("Any (undefined):", anything);
anything = () => console.log("This is a function"); // can also be a function
anything(); // calling the function
anything = true; // can also be a boolean
console.log("Any (boolean):", anything);
//void
function logMessage(message) {
    console.log("Log:", message);
}
logMessage("This is a void function example.");
//null
var nullable = null;
console.log("Null:", nullable);
//undefined
var undef = undefined;
console.log("Undefined:", undef);
//array
var numbers = [1, 2, 3, 4, 5];
console.log("Array of Numbers:", numbers);
numbers.push(6); // adding a number to the array
//numbers.push("usha");// this will cause an error because the array is of type number[]
//string array
var stringArray = ["TypeScript", "JavaScript", "Python"];
console.log("Array of Strings:", stringArray);
//boolean array
var booleanArray = [true, false, true];
console.log("Array of Booleans:", booleanArray);
//readonly array
var readonlyArray = [1, 2, 3, 4, 5];
console.log("Readonly Array:", readonlyArray);
//readonlyArray.push(6); // this will cause an error because the array is readonly
//object
var obj = { name: "TypeScript", version: 5.8 };
console.log("Object:", obj);
//tuple
var tuple = [1, "Tuple Example", true]; //type should be defined in order
console.log("Tuple:", tuple);
//extract values from object and array
//destructuring array
var [id, role, isemployee] = [1, "developer", true];
console.log("Destructured Array:", id, role, isemployee);
//or we can print like this also
console.log(id);
console.log(role);
console.log(isemployee);
//destructuring object
var userDetails = { userId, userName, userRole };
var { userId, userName, userRole } = userDetails;
var userInfo = {
    "userId": 1,
    "userName": "usha",
    "userRole": "developer"
};
console.log(userInfo.userId);
console.log(userInfo.userName);
console.log(userInfo.userRole);
//optional parameters
var names = // defining an object with optional parameter
 {
    firstName: "Usha",
    //lastName: "Arpitha" // lastName is optional
};
console.log("Optional Parameter:", names.firstName);
console.log("Optional Parameter (lastName):", names.lastName); // this will be undefined if not provided
//optional parameters with default values
var greet = (name, greeting = "Hello") => {
    console.log(`${greeting}, ${name}!`);
};
greet("Usha"); // uses default greeting
greet("Usha", "Hi"); // uses provided greeting  
greet("Usha", undefined); // uses default greeting, as undefined is passed
greet("Usha", null); // uses null as greeting, which is not the default value
//optional parameters with rest parameters
var logNumbers = (prefix, ...numbers) => {
    console.log(prefix);
    numbers.forEach(num => console.log(num));
};
logNumbers("Numbers:", 1, 2, 3, 4, 5); // logs all numbers with prefix
logNumbers("More Numbers:", 10, 20); // logs more numbers with prefix
