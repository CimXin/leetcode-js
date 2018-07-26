//Q: Repeated DNA Sequences; https://leetcode-cn.com/problems/repeated-dna-sequences/description/

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
    var lens = s.length;
    var resultStr = [];
    var resultMap = {};
    for (var i = 0; i < lens; ++i) {
        var nextIndex = i + 10;
        if (nextIndex <= lens) {
            var sliceStr = s.slice(i, nextIndex);
            if (!resultMap[sliceStr]) {
                resultMap[sliceStr] = 1;
            } else if (resultMap[sliceStr] == 1) {
                resultStr.push(sliceStr);
                resultMap[sliceStr]++;
            } else {
                resultMap[sliceStr]++;
            }
        }
    }
    return resultStr;
};

var result = findRepeatedDnaSequences("AAAAAAAAAAAA");
console.log(result);

// var a = '123456';
// console.log(a.indexOf("12"));
// var a = "0123456789012";
// var lens = a.length;
// var b = a.slice(0, 10);
// var c = a.slice(0, 0);
// var d = a.slice(10, lens);
// console.log(a, ' - ', b, ' - ', c, ' - ', d)