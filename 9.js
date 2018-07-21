
//Q: https://leetcode-cn.com/problems/palindrome-number/description/

/**
 * 本题难点是不将数字转成字符串
 * 怎么得出数字的长度（不转成字符串）=>一直除以10 知道余数小于10
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }

    var lens = getNumLength(x, true);

    for (var i = 0; i < lens / 2; ++i) {
        var tail = getNumByIndex(i, x);
        var head = getNumByIndex(lens - i - 1, x);
        if (tail != head) {
            return false;
        }
    }
    return true;
};

var getNumByIndex = function (i, x) {
    if (i == 0) {
        return x % 10;
    }
    var x1 = x % Math.pow(10, i + 1);
    var x2 = x1 / Math.pow(10, i);
    return Math.floor(x2);
}
var length = 1;
var getNumLength = function (x, first) {
    if (first) {
        length = 1;
    }
    if (x < 10) {
        return length;
    }
    length++;
    getNumLength(x / 10, false);
    return length;
}


var flag = isPalindrome(121);
console.log(flag)