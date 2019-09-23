//实例方法
/* 
最重要的两个一个是 exec一个是test
*/
/*
exec方法，专门为捕获组而设计，接收一个参数及要应用模式的字符串，
返回包含 第一个 匹配项的数组，在没有匹配项的情况下返回null
返回的数组有另外两个实例 index和input
index表示匹配项在字符串中位置，input表示应用正则表达式的字符串
在数组中，第一项是与模式中捕获组匹配的字符串，如果没有捕获组则数组只有第一项
*/
const str1 = 'cat dat vat'
const pattern = /((cat) (dat) (vat))/gi
const matches = pattern.exec(str1)
console.log(matches.index)  //0
console.log(matches.input)  //cat dat vat
console.log(matches)        //["cat dat vat", "cat dat vat", "cat", "dat", "vat"]

/* 
exec方法即使在模式中设置了全局标志g每次也只会返回一个匹配项
在不设置全局标识的情况下多次调用exec将始终返回第一个匹配项的信息
在设置全局标志下每次调用exec都会在字符串中继续查找新匹配项
*/

//test方法，接收一个字符串参数，在模式与该参数匹配的情况下返回true，否则返回flase

const str2 = '00001'
const pattern1 = /\d{5}/
console.log(pattern1.test(str2))    //true