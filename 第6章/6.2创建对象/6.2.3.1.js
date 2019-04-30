//1.理解原型对象

function Person(){
}
Person.prototype.name="xiaochuan";
Person.prototype.age=21;
Person.prototype.getName=function(){
    console.log(this.name);
};

var person1=new Person();
console.log(person1.__proto__);                         //{name: "xiaochuan", age: 21, getName: ƒ, constructor: ƒ}
console.log(person1.__proto__==Person.prototype);       //true

//实例属性会屏蔽原型中的属性

function Person(){
}
Person.prototype.name="xiaochuan";
Person.prototype.age=21;
Person.prototype.getName=function(){
    console.log(this.name);
};
var person1=new Person();
var person2=new Person();

person1.name = "dachaun";
person1.getName();       //dachaun来自实例
person2.getName();      //xiaochuan来自原型
delete person1.name;
person1.getName();      //xiaochuan来自原型

//hasOwnProperty()方法检测属性位于实例还是原型

function Person(){
}
Person.prototype.name="xiaochuan";
Person.prototype.age=21;
Person.prototype.getName=function(){
    console.log(this.name);
};
var person1=new Person();
var person2=new Person();
console.log(person1.hasOwnProperty("name"));        //false来自原型
person1.name = "dachuan";
console.log(person1.hasOwnProperty("name"));        //true来自实例