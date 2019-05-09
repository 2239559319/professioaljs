/*组合使用构造函数模式和原型模式
* 构造函数定义实例属性，原型模式定义方法和共享的属性
* */
function Person(name,age){
    this.name = name;
    this.age = age;
    this.friends=["persona","personb"];
}
Person.prototype={
    constructor:Person,
    getName:function(){
        console.log(this.name);
    }
};
var person1=new Person('xiaochuan',21);
var person2=new Person('dachuan',26);
person1.friends.push('personc');
console.log(person1.friends);       //[ 'persona', 'personb', 'personc' ]
console.log(person2.friends);       //[ 'persona', 'personb' ]