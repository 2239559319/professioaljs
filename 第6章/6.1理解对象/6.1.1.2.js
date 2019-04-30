// 定义访问器属性

var book={
    _year:2004,
    edition:1
};
Object.defineProperty(book,"year",{         //访问器属性year
    get:function(){
        return this._year;
    },
    set:function(v){
        if(v>2004){
            this._year=v;
            this.edition+=v-2004;
        }
    }
});

book.year=2006;
console.log(book.edition);      //3