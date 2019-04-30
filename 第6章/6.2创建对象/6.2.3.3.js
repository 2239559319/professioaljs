//更简单的原型语法
function Person(){
}
Person.prototype={
    constructor:Person,
    name:"xiaochuan",
    age:21,
    getName:function(){
        console.log(this.name);
    }
};
var person1=new Person();
console.log(Person.prototype.constructor);  //Person