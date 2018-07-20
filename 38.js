//Q :https://leetcode-cn.com/problems/count-and-say/description/

/**
 * 题目意思是数上个数即（n-1）的组成
 */

var countAndSay = function (n) {
    console.log(n);
    if (n == 1) {
        return "1";
    }
    var str = countAndSay(n - 1);
    var count = 1,
        type = str[0],
        resultStr = "";

    for (var i = 1; i < str.length; ++i) {
        var type1 = str[i];
        if (type1 == type) {
            count++;
        } else {
            resultStr += count + type;
            count = 1;
            type = type1;
        }
    }
    resultStr += count + type;
    return resultStr;
}

var result = countAndSay(1);
console.log("result ", result);