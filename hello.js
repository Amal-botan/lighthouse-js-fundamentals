// const sayHello  = function () {
//   console.log("Hello, world");
// }

// sayHello();


function hey() {
  console.log("Hello, world");
}




const hi =  hey => {
  console.log("Hello, world");
}



const sayHello  = function (name) {
  console.log("Hello, " + name);
}

sayHello("Amal"); 

//Using return & console.log
//console
const sayHelloToConsole  = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('John'); 

//return
const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John'); //nothing gets outputted

//console.log it later
const returnSayHello2  = function (name) {
  return "Hello, " + name;
}
const greeting2 = returnSayHello2("John");
console.log(greeting2);
