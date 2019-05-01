// Array类型

//两种创建方式
var colors=new Array();
var colors=new Array(20);       //数组长度为20
var colors=new Array("red","green","blue");

colors[2]="black";      //修改第3项
colors[3]="brown";      //新增第4项

//末尾添加新项
colors[colors.length]="white";