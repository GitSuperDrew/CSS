/**
 * 测试 全局变量 setTimeout(cb.ms)
 */

function printHello(){
    console.log( "Hello, World!");
 }
 // 两秒后执行以上函数
 setTimeout(printHello, 2000);