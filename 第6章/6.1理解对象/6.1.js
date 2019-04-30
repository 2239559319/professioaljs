//Object构造函数创建对象

var person=new Object();
person.name="xiaochuan";
person.age=21;
person.getName=function(){
    console.log(this.name);
};


person.getName();

//对象字面量创建对象

var person1={
    name:"xiaochuan",
    age:21,
    getName:function(){
        console.log(this.name);
    }
};

person1.getName();