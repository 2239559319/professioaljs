//原型模式

function Person(){
}
Person.prototype.name="xiaochuan";
Person.prototype.age=21;
Person.prototype.getName=function(){
    console.log(this.name);
};

var person1=new Person();
var person2=new Person();
person1.getName();
person2.getName();
console.log(person1.getName==person2.getName);      //true