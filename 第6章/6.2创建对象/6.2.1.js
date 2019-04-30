//工厂模式,问题：不知道一个对象的类型

function createPerson(name,age){
    var o=new Object();
    o.name=name;
    o.age=age;
    o.getName=function(){
        console.log(this.name);
    };
    return o;
}

var person1=createPerson("xiaochuan",21);
var person2=createPerson("dachuan",25);
person1.getName();
person2.getName();