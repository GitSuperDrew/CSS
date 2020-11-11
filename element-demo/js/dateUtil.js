/**
 * date1, date2
 * 返回一个对象{days: 天数, hours: 小时, minutes: 分钟数, seconds: 秒数}
 * 使用方法： console.log(calcDate(new Date().getTime()， new Date().getTime() + 1000)); // {leave1: 1000, leave2: 1000, leave3: 1000, days: 0, hours: 0, …} 
 */
export const calcDate = (date1, date2) => {
	var date3 = date2 - date1;

	var days = Math.floor(date3 / (24 * 3600 * 1000))

	var leave1 = date3 % (24 * 3600 * 1000) //计算天数后剩余的毫秒数  
	var hours = Math.floor(leave1 / (3600 * 1000))

	var leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数  
	var minutes = Math.floor(leave2 / (60 * 1000))

	var leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数  
	var seconds = Math.round(date3 / 1000)
	return {
		leave1,
		leave2,
		leave3,
		days: days,
		hours: hours,
		minutes: minutes,
		seconds: seconds,
	}
}

/**
 * 日期格式化(年月日时分秒毫秒季度)
 * 使用案例：console.log("默认格式化日期：", dateFormat(new Date())); // 默认格式化日期： 2020-09-10 15:25:14
 * @param {Object} date 默认格式化为 'yyyy-MM-dd hh:mm:ss'
 */
export function dateFormat(date) {
	let format = 'yyyy-MM-dd hh:mm:ss';
	if (date != 'Invalid Date') {
		var o = {
			"M+": date.getMonth() + 1, //month
			"d+": date.getDate(), //day
			"h+": date.getHours(), //hour
			"m+": date.getMinutes(), //minute
			"s+": date.getSeconds(), //second
			"q+": Math.floor((date.getMonth() + 3) / 3), //quarter
			"S": date.getMilliseconds() //millisecond
		}
		if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
			(date.getFullYear() + "").substr(4 - RegExp.$1.length));
		for (var k in o)
			if (new RegExp("(" + k + ")").test(format))
				format = format.replace(RegExp.$1,
					RegExp.$1.length == 1 ? o[k] :
					("00" + o[k]).substr(("" + o[k]).length));
		return format;
	}
	return '';

}


/**
 * 日期操作相关函数
 */

/**
 * 格式化日期(年月日时分秒毫秒季度)
 * 
 * 使用案例：console.log(dateTimeFormatter(new Date().getTime(), 'yyyy-MM-dd q h:mm:ss.SSS')); // 2020-09-10 3 15:21:07.73
 * @param {Object} date
 * @param {Object} format
 */
export function dateTimeFormatter(date, format) {
	// 时间格式化辅助函数 date:毫秒数 format:'yyyy-MM-dd hh:mm:ss'
	if (!date || date == "") {
		return ""
	}

	if (typeof date === "string") {
		var mts = date.match(/(\/Date\((\d+)\)\/)/);
		if (mts && mts.length >= 3) {
			date = parseInt(mts[2])
		}
	}

	date = new Date(date);
	if (!date || date.toUTCString() == "Invalid Date") {
		return ""
	}

	var map = {
		"M": date.getMonth() + 1, //月份
		"d": date.getDate(), //日
		"h": date.getHours(), //小时
		"m": date.getMinutes(), //分
		"s": date.getSeconds(), //秒
		"q": Math.floor((date.getMonth() + 3) / 3), //季度
		"S": date.getMilliseconds() //毫秒
	};

	format = format.replace(/([yMdhmsqS])+/g, function(all, t) {
		var v = map[t];
		if (v !== undefined) {
			if (all.length > 1) {
				v = '0' + v;
				v = v.substr(v.length - 2)
			}
			return v
		} else if (t === 'y') {
			return (date.getFullYear() + '').substr(4 - all.length)
		}
		return all
	});

	return format
}

/**
 * 判断两个日期是否相等
 * 使用案例：
 *  console.log(isEqualDateStr('2020/09/09', '2020/09/09'));// true
 *  console.log(isEqualDateStr('2021/09/09', '2020/09/09'));// false
 * 
 * @param {string} dateStr1 日期格式：yyyy/MM/dd
 * @param {string} dateStr2 日期格式：yyyy/MM/dd
 */
export function isEqualDateStr(dateStr1, dateStr2) {
	let dateArr1 = dateStr1.split('/');
	let dateArr2 = dateStr2.split('/');
	if (parseInt(dateArr1[0], 10) !== parseInt(dateArr2[0], 10)) {
		return false
	}
	if (parseInt(dateArr1[1], 10) !== parseInt(dateArr2[1], 10)) {
		return false
	}
	if (parseInt(dateArr1[2], 10) !== parseInt(dateArr2[2], 10)) {
		return false
	}
	return true
}

/**
 * 格式化时间转变为： 2017年10月10日 10时10分10秒
 * 使用案例：
 * console.log(data_format(new Date(), ["年", "月", "日", "时", "分", "秒"])); // 2020年09月10日 15时45分26秒
 * 
 * @param date 2017/10/10
 * @param mat_arr   [年，月，日 ....]  非必填
 * @returns {string} 返回格式化好的时间格式
 */
export function data_format(date, _mat_arr) {
	//默认格式
	let mat_arr = ['年', '月', '日'];
	if (_mat_arr) {
		mat_arr = _mat_arr;
	}
	if (!date || date == "") {
		return ""
	}
	if (typeof date === "string") {
		var mts = date.match(/(\/Date\((\d+)\)\/)/);
		if (mts && mts.length >= 3) {
			date = parseInt(mts[2])
		}
	}
	date = new Date(date);
	if (!date || date.toUTCString() == "Invalid Date") {
		return ""
	}
	var map = {
		"Y": date.getFullYear(), //年份
		"M": date.getMonth() + 1, //月份
		"d": date.getDate(), //日
		"h": date.getHours(), //小时
		"m": date.getMinutes(), //分
		"s": date.getSeconds() //秒
	};
	//月份补位
	if (map.M && map.M < 10) {
		map.M = '0' + map.M;
	}
	//time格式化
	let str = '';
	mat_arr.forEach((item, index) => {
		switch (index) {
			case 0:
				str += `${map.Y}${item}`;
				break;
			case 1:
				str += `${map.M}${item}`;
				break;
			case 2:
				str += `${map.d}${item}`;
				break;
			case 3:
				str += ` ${map.h}${item}`;
				break;
			case 4:
				str += `${map.m}${item}`;
				break;
			case 5:
				str += `${map.s}${item}`;
				break;
		}
	});
	return str;
}


// 增加天 
export function AddDays(date, value) {
	date.setDate(date.getDate() + value);
}
// 增加月 
export function AddMonths(date, value) {
	date.setMonth(date.getMonth() + value);
}
// 增加年 
export function AddYears(date, value) {
	date.setFullYear(date.getFullYear() + value);
}
// 是否为今天 
export function IsToday(date) {
	return IsDateEquals(date, new Date());
}
// 是否为当月 
export function IsThisMonth(date) {
	return IsMonthEquals(date, new Date());
}
// 两个日期的年是否相等 
export function IsMonthEquals(date1, date2) {
	return date1.getMonth() == date2.getMonth() && date1.getFullYear() == date2.getFullYear();
}
// 判断日期是否相等 
export function IsDateEquals(date1, date2) {
	return date1.getDate() == date2.getDate() && IsMonthEquals(date1, date2);
}
// 返回某个日期对应的月份的天数 
export function GetMonthDayCount(date) {
	switch (date.getMonth() + 1) {
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
			return 31;
		case 4:
		case 6:
		case 9:
		case 11:
			return 30;
	}
	//feb: 
	date = new Date(date);
	var lastd = 28;
	date.setDate(29);
	while (date.getMonth() == 1) {
		lastd++;
		AddDays(date, 1);
	}
	return lastd;
}
// 返回两位数的年份 
export function GetHarfYear(date) {
	var v = date.getYear();
	if (v > 9) return v.toString();
	return "0" + v;
}
// 返回月份（修正为两位数） 
export function GetFullMonth(date) {
	var v = date.getMonth() + 1;
	if (v > 9) return v.toString();
	return "0" + v;
}
// 返回日 （修正为两位数） 
export function GetFullDate(date) {
	var v = date.getDate();
	if (v > 9) return v.toString();
	return "0" + v;
}
