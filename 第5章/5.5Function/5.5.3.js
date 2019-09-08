// 作为值的函数
//函数名是变量，可以将函数名传参，也可以将一个函数作为返回值
function callSomeFunction(someFunction,someArgument){
    return someFunction(someArgument);
}
function add10(num){
    return num + 10;
}
var result1 = callSomeFunction(add10,10);
console.log(result1);       //20
function greeting(name){
    return 'hello ' + name;
}
var result2 = callSomeFunction(greeting,'xiaochuan');
console.log(result2);       //hello xiaochuan