// 借用构造函数：在子类型构造函数中调用父类的构造函数

function SuperType(){
    this.color=['red','blue'];
}
function SubType(){
    SuperType.call(this);       //在子类构造函数中调用父类构造函数，此时父类构造函数中的this指向子类
}
var instance1=new SubType();
console.log(instance1.color);       //[ 'red', 'blue' ]
instance1.color.push('white');
console.log(instance1.color);       //[ 'red', 'blue', 'white' ]

var instance2=new SubType();
console.log(instance2.color);       //[ 'red', 'blue' ]并不会被影响

function Xiaochuan(name){
    this.name=name;
}
function Dachuan(){
    Xiaochuan.call(this,"xiaochaun");
    this.age=21;
}
var dachaun=new Dachuan();
console.log(dachaun.age,dachaun.name);       //21 'xiaochaun'