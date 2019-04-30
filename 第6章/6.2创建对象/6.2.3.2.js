//in操作符，只要对象有这个属性（无论在原型还是实例中）都范返回true
function Person(){
}
Person.prototype.name="xiaochuan";
Person.prototype.age=21;
Person.prototype.getName=function(){
    console.log(this.name);
};
var person1=new Person();
var person2=new Person();
console.log(person1.hasOwnProperty("name"));    //false
console.log("name" in person1);                 //true

function hasPrototypeProperty(object,name){     //在原型中的属性返回true
    return !object.hasOwnProperty(name)&&(name in object);
}

//for in 循环,所有开发人员定义的属性都是可枚举的
var o={
    toString:function(){
        return "my object";
    }
};
for(var prop in o) {
    console.log(prop);
}       //toString
//获取对象可枚举的实例属性 Object.keys()方法
function Person(){
}
Person.prototype.name="xiaochuan";
Person.prototype.age=21;
Person.prototype.getName=function(){
    console.log(this.name);
};
var person1=new Person();
console.log(Object.keys(person1));      //[]为空
console.log(Object.keys(Person.prototype));     //[ 'name', 'age', 'getName' ]
console.log(Object.keys(person1.__proto__));    //[ 'name', 'age', 'getName' ]
//获取所有的实例属性无论是否可枚举 Object.getOwnPropertyNames()方法
function Person(){
}
Person.prototype.name="xiaochuan";
Person.prototype.age=21;
Person.prototype.getName=function(){
    console.log(this.name);
};
var person1=new Person();
console.log(Object.getOwnPropertyNames(Person.prototype));      //[ 'constructor', 'name', 'age', 'getName' ]