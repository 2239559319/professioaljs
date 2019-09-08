//函数声明和函数表达式
/**
 * 解析器会率先读取函数声明通过一个叫函数声明提升的过程
 */
//以下代码可用
alert(sum(10,10));
function sum(num1,num2){
    return num1 + num2;
}
//以下代码不可用
alert(sum(10,10));
var sum = function(num1,num2){
    return num1 + num2;
}
// 除了什么时候可以通过变量访问函数这一点，函数声明和函数表达式是一样的