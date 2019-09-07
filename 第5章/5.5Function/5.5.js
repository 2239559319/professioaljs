// Function类型
/** 函数实际上是对象,函数名相当于指针
 *  都是Function类型的实例
 * 
 */
function sum(num1,num2){
    return num1 + num2;
}
//近乎等价于
var sum = function(num1,num2){
    return num1 + num2;
}
console.log(typeof sum);    //function
console.log(sum instanceof Function);   //true