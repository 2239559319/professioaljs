//确定原型和实例的关系

function SuperType(){       //父类
    this.superName='xiaochuan';
}
SuperType.prototype.getName =function(){
    console.log(this.superName);
};
function SubType(){         //子类
    this.subName='dachuan';
}
SubType.prototype=new SuperType();
SubType.prototype.getNewName=function(){
    console.log(this.subName);
};

var instance=new SubType();
console.log(instance instanceof Object);    //true
console.log(instance instanceof SuperType); //true
console.log(instance instanceof SubType);   //true

console.log(Object.prototype.isPrototypeOf(instance));  //true
console.log(SuperType.prototype.isPrototypeOf(instance));   //true
console.log(SubType.prototype.isPrototypeOf(instance));     //true