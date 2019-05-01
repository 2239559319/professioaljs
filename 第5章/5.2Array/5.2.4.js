//队列方法 push() shift() unshift()
//shift()方法，取得第一项并返回值，长度减1
var colors=["red","white","blue"];
console.log(colors.shift());        //red
console.log(colors);                //[ 'white', 'blue' ]
//unshift()从前面添加任意项并返回新数组长度
console.log(colors.unshift("red","black"));     //4
console.log(colors);                //[ 'red', 'black', 'white', 'blue' ]