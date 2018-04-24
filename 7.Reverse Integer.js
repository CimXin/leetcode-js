/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    var symbol = x < 0 ? -1 : 1;
    var xStr = x.toString();
    var len = xStr.length;
    var yStr = ""
    for (var i = xStr.length - 1; i >= 0; --i) {
        yStr += xStr[i];
    }
    x =  parseInt(yStr) * symbol;

    if (x > Math.pow(2, 31) - 1 || x < -Math.pow(2, 31)) {
        return 0;
    }
    return x;
};



