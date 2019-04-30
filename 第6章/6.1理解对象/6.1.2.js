//定义多个属性 Object.defineProperties()函数

var book={};
Object.defineProperties(book,{
    _yaer:{
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