//操作方法
//concat方法,参数多个，可以是值或数组
var colors1=["red"];
var colors2=["green","blue"];
console.log(colors1.concat(colors2));       //[ 'red', 'green', 'blue' ]
//slice方法,分割创建新数组
var colors=['red','white','blue','black'];
console.log(colors.slice(1));       //[ 'white', 'blue', 'black' ]
console.log(colors.slice(1,2));     //[ 'white' ]
//splice方法，略