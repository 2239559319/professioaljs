//Object类型创建的两种方法
var person1=new Object();
person1.name="xiaochuan";
person1.age=21;

var person2={
    name:"xiaochuan",
    age:21
};

console.log(person1.name);      //xiaochuan
console.log(person1["name"]);   //xiaochuan,通过变量访问属性
