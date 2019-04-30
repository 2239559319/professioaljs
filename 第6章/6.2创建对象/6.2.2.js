//构造函数模式


/*  没有显式创建对象
*   直接将属性和方法赋值给this
*   没有return语句
* */
/*      1 创建一个新对象
*       2 将构造函数的作用域赋给新对象
*       3 执行构造函数中的代码为对象添加属性
*       返回新对象
* */

function Person(name,age){
    this.name = name;
    this.age = age;
    this.getName=function(){
        console.log(this.name);
    }
}
var person1=new Person("xiaochuan",21);
var person2=new Person("dachuan",26);
person1.getName();
person2.getName();
console.log(person1.constructor==Person);       //实例中的constructor指向构造函数
console.log(person2.constructor==Person);       //true