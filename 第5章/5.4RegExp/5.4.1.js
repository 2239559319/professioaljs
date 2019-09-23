// RegExp实例属性

/* 
global boolean,是否设置g标志
ignoreCase boolean,是否设置i标志
lastIndex number,开始搜索下一个匹配项的字符位置
multiline boolean 是否设置m标志
sourse 字面量字符串表示
*/
const pattern = /[bc]at/g

console.log(pattern.lastIndex)  //0
console.log(pattern.exec('cata'))
console.log(pattern.lastIndex)  //3