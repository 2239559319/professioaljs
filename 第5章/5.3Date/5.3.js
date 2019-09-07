// 构造函数

var now = new Date();   //获取当前时间

// Date.parse()方法 接受一个表示日期的字符串参数,可以是以下格式
/** "月/日/年" 如 6/13/2004
 *  "英文月名 日,年" 如 January 12,2004
 *  其他格式省略
 */
var someDate = new Date(Date.parse('May 25,2004'));
//如果将表示日期字符串直接传给Date构造函数，在后头调用Date.parse方法
//以上代码等价于
var someDate = new Date('May 25,2004');

// Date.UTC方法参数 年份，基于0的月份（1月是0），月中的哪一天(1-31)，小时数(0-23)，分钟，秒以及毫秒
// 只有前两个参数必须
//以下两个是GMT时间
var y2k = new Date(Date.UTC(2000,0));
var allFives = new Date(Date.UTC(2005,4,5,17,55,55));
//以下两个是本地时间，不同
var y2k = new Date(2000,0);
var allFives = new Date(2005,4,5,17,55,55);

// es5新增Date.now方法，表示调用方法时的毫秒数
var start = Date.now();
console.log(start);     //1567832113759