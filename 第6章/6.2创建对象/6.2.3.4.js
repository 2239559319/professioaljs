//原型的动态性
function Person(){
}
var person=new Person();
Person.prototype.name="xiaochuan";
Person.prototype.age=21;
Person.prototype.getName=function(){
    console.log(this.name);
};
person.getName();       //xiaochuan, person实例指向的原型没变

function Person(){
}
var person=new Person();
Person.prototype={
    constructor:Person,
    name:"xiaochuan",
    age:21,
    getName:function(){
        console.log(this.name);
    }
};
person.getName();   //出现错误，person指向的原型只有constructor没有其他属性