//Object.defineProperty()的使用，修改属性特性

var person={};
Object.defineProperty(person,"name",{
    writable:false,
    value:"xiaochuan"
});

console.log(person.name);   //xiaochuan
person.name = "dachuan";
console.log(person.name);   //xiaochuan

var person1={};
Object.defineProperty(person1,"name",{
    configurable:false,     //这个属性如果为false的话就不能改为true了
    value:"xiaochuan"
});

console.log(person1.name);  //xiaochuan
delete person1.name;
console.log(person1.name);  //xiaochuan
