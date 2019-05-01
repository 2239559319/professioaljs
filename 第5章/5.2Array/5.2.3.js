//栈方法   push() pop()
//push()添加到数组末尾，返回修改后数组的长度,接受任意长度参数
var colors=["red"];
console.log(colors.push("white","blue"));       //3
console.log(colors);                //[ 'red', 'white', 'blue' ]

//pop()从数组末尾删除一项并返回这个值
console.log(colors.pop());          //blue
console.log(colors);                //[ 'red', 'white' ]