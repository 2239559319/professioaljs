/*动态原型模式
* 只会在第一次运行时在原型对象上创建方法
* 以后可以共享
* */
function Person(name,age){
    this.name=name;
    this.age=age;
    if(typeof this.getName !='function'){
        Person.prototype.getName=function(){
            console.log(this.name);
        }
    }
}