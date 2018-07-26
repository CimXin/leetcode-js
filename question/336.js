//Q: https://leetcode-cn.com/problems/palindrome-pairs/description/

var testStr = require("./test").testStr;
/**
 * 本题难点在于优化耗时
 */
/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {

    var lens = words.length;
    var str1 = null,
        str2 = null;
    var resultArr = []
    for (var i = 0; i < lens; ++i) {
        for (var j = 0; j < lens; ++j) {
            if (j == i) {
                continue;
            }
            str1 = words[i], str2 = words[j];
            if (checkPalindrome(str1 + str2)) {
                resultArr.push([i, j]);
            }
        }
    }
    return resultArr;
};

var checkPalindrome = function (word) {
    var lens = word.length;
    for (var i = 0; i < lens / 2; ++i) {
        if (word[i] != word[lens - 1 - i]) {
            return false;
        }
    }
    return true;
}

// var flag = checkPalindrome('abbabba');
// console.log(flag);
var start = +new Date();
palindromePairs(testStr);
var end = +new Date();
console.log((end - start) + ' ms,', testStr.length);