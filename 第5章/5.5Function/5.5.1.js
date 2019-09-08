// 没有重载
//因为函数名是指针,所有创建多个同名函数只是将函数指针移到了新位置

function addSomeNumber(num){
    return num + 100;
}
function addSomeNumber(num){
    return num + 200;
}
//以上代码等价于
var addSomeNumber = function(num){
    return num + 100;
}
addSomeNumber = function(num){
    return num + 200;
}