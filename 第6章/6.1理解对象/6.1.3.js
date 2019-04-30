//读取属性的特性 Object.getOwnPropertyDescriptor()函数

var book={};
Object.defineProperties(book,{
    _year:{
        writable:true,
        value:2004
    },
    edition:{
        writable:true,
        value:1
    },
    year:{
        get:function(){
            return this._yaer;
        },
        set:function(newValue){
            if(newValue>2004){
                this._yaer=newValue;
                this.edition+=newValue-2004;
            }
        }
    }
});

var descriptor=Object.getOwnPropertyDescriptor(book,"_year");
console.log(descriptor.value);      //2004
console.log(descriptor.configurable);   //false
console.log(typeof descriptor.get);     //undefined


var descriptor=Object.getOwnPropertyDescriptor(book,"year");
console.log(descriptor.value);      //undefined
console.log(descriptor.enumerable);     //false
console.log(typeof descriptor.get);     //function