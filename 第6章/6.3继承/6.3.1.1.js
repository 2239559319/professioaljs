/*原型继承*/

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
instance.getName();     //xiaochuan
instance.getNewName();      //dachuan