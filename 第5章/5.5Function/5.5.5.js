// 函数属性和方法
/* 
    js中函数都是对象,每个函数都包含两个属性: length和prototype
    length 表示函数希望接收的命名参数的个数
*/
function sayName(name){
    console.log(name);
}
function sum(num1,num2){
    return num1 + num2;
}
function sayHi(){
    console.log('Hi');
}
console.log(sayName.length);    // 1
console.log(sum.length);        // 2
console.log(sayHi.length);      // 0

/* 
函数都包含两个非继承来的方法
apply和call 用途是在特定的作用域中调用函数,实际等于设置函数体内this的值
apply方法接收两个参数：一个是在其中运行函数的作用域，另一个是参数数组。其中第二参数可以是Array的实例也可以是arguments对象
*/
function sum(num1,num2){
    return num1 + num2;
}
function callSum1(num1,num2){
    return sum.apply(this,arguments);
}
function callSum2(num1,num2){
    return sum.apply(this,[num1,num2]);
}
console.log(callSum1(10,10));       //20,运行时this指向window,下同
console.log(callSum2(10,10));       //20

/* 
call方法和apply方法作用相同，区别在于接收参数的方式不同
apply第二参数是数组或者类数组对象，call方法第二参数后面是列举的参数
*/
function sum(num1,num2){
    return num1 + num2;
}
function callSum(num1,num2){
    return sum.call(this,num1,num2);
}
console.log(callSum(10,10));        //运行时this指向window

//用处 扩充函数赖以运行的作用域


window.color = 'red';

var o = {
    color:'blue'
};
function sayColor(){
    console.log(this.color);
}
sayColor();         //red
sayColor.call(this);        //red
sayColor.call(window);      //red
sayColor.call(o);       //blue

// bind方法，这个方法创建一个函数的实例，this值会被绑定到传给bind函数的值
window.color = 'red';
var o = {color:'blue'};
function sayColor(){
    console.log(this.color);
}
var newSayColor = sayColor.bind(o);
newSayColor();      //blue