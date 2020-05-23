/**
 * console 相关用法
 * 1. console.log()
 * 2. console.info()
 * 3. console.trace()
 * 4. console.error()
 * 5. console.warn()
 * 6. console.time()
 * 7. console.timeEnd()
 * 8. console.dir()
 * 9. console.clear()
 */

console.info("程序开始执行：");

var counter = 10;
console.log("计数: %d", counter);

console.time("获取数据");
//
// 执行一些代码
// 
// console.log("hello world!")
// console.log("hello world!")
// console.log("hello world!")
// console.log("hello world!")
// console.log("hello world!")
// console.log("hello world!")

console.timeEnd('获取数据');

console.info("程序执行完毕。")