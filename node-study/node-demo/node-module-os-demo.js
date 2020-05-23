/**
 * NodeJS 工具模块：os
 */
var os = require("os");
console.log("操作系统名称：" + os.hostname());
console.log("系统内存总量：" + os.totalmem());
console.log("系统空闲内存：" + os.freemem());
console.log("操作系统CPU架构：" + os.arch());
console.log("操作系统发行版本：" + os.release());