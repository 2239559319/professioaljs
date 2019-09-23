/* RegExp类型
var expression = /pattern/flags;
flags有三种取值 g：全局模式 i：不区分大小写模式 m：多行模式

*/

// flags = g
const str = 'catdat'
const pattern1 = /at/g
//flags = i
const pattern2 = /[bc]at/i
//元字符必须转义
//  ([{\^$|?*+.}])
const pattern3 = /\[bc\]at/
const pattern4 = /\.at/
//前面的形式是以字面量形式定义正则表达式，也可以以构造函数形式定义
const pattern = /[bc]at/i
const pattern2 = new RegExp('[bc]at','i')   //等价
//在构造函数定义时元字符要双重转义
/* 
    /\[bc\]at/   '\\[bc\\]at'
    /\.at/       '\\.at'
    /\w\\hello\\123/    '\\w\\\\hello\\\\123'
*/
//字面量模式必须像构造函数一样每次都创建一个RegExp实例