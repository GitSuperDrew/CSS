// ========================= JS文件插件注释：Better Comments ===============
// 此插件只有在问及那后缀名为“js”的文件中，才有自动提示注释效果。

function showRandomId() {
  const randomId = Math.random().toString(36).substring(2);
  // alert("生成随机数ID：" +  randomId);
  // console.log(randomId);
}

/**
 * 测试函数
 */
function testFunction() {
  alert("Hello World!");
}

/**
 * 生成随机的16进制 颜色码 如：#ffffff
 */
function getRandomColor() {
  const randomColorCode =
    "#" +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padEnd(6, "0");
  alert("随机16进制颜色代码：" + randomColorCode);
  console.log(randomColorCode);
}

/**
 * 获取当前按键的code
 */
function returnKeyboard() {
  const str = ((_) =>
    [..."`1234567890-=~~QWERTYUIOP[]~ASDFGHJKL;'~~ZXCVBNM,./~"].map(
      (x) =>
        ((o += `/${(b = "_".repeat(
          (w =
            x < y
              ? 2
              : " 667669"[
                  ((x =
                    ["BackSpace", "Tab", "CapsLock", "Enter"][p++] || "Shift"),
                  p)
                ])
        ))}\|`),
        (m += y + (x + "   ").slice(0, w) + y + y),
        (n += y + b + y + y),
        (l += " __" + b))[73] &&
        (k.push(l, m, n, o), (l = ""), (m = n = o = y)),
      (m = n = o = y = "|"),
      (p = l = k = [])
    ) && k.join``)();
  document.body.innerHTML = str;
}

/**
 * 格式化金钱格式化
 * 输入：1234567
 * 输出：1,234,567
 * @param {string} moneyStr 数字字符串
 * @return 格式化的金钱字符串
 */
function formatMoney1(moneyStr) {
  return moneyStr
    .split("")
    .reverse()
    .reduce((prev, next, index) => {
      return (index % 3 ? next : next + ",") + prev;
    });
}

/**
 * 判断一个字符串中出现次数最多的字符，并统计这个字符出现的次数
 * @param {string} str
 */
function countStr(str) {
  var obj = [];
  for (var i = 0, len = str.length, k; i < len; i++) {
    k = str.charAt(i);
    if (obj[k]) {
      obj[k]++;
    } else {
      obj[k] = 1;
    }
  }
  var m = 0,
    i = null;
  for (var k in obj) {
    if (obj[k] > m) {
      m = obj[k];
      i = k;
    }
  }
  return i + ":" + m;
}

function arrSortAsc(arr) {
  return arr.sort();
}

/**
 * 角度 → 弧度
 * @param {number} degrees
 */
function degreesToRad(degrees) {
  var rad = degrees * (Math.PI / 180);
  return rad;
}
/**
 * 弧度 → 角度
 * @param {number} rad
 */
function radToDegrees(rad) {
  var degrees = rad * (180 / Math.PI);
  return degrees;
}

/**
 * 控制台输出：hello world!
 */
function consoleShowHi() {
  console.log("hello  world!");
}

function alertShowHi() {
  alert("hi, 你好");
}

/**
 * 求和
 * @param {Number} a
 * @param {Number} b
 */
function add(a, b) {
  return a + b;
}

/**
 * 将数组使用逗号拼接为字符串
 * @param {Number[]} list
 */
function listToStr(list) {
  let resultStr = "";
  if (list == null || list.size == 0) {
    return resultStr;
  }
  let len = list.size();
  for (i = 0; i < len; i++) {
    resultStr.concat(list[i]);
  }
  alert(resultStr);
}

/**
 * 累计：例如 n=3,则结果为 6 （3+2+1=6）
 * @param {Number} n
 */
function sumAll(n) {
  if (n === 1) {
    return n;
  }
  return n + sumAll(n - 1);
}
