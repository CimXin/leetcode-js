/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (s.length == 0 || s == null) {
        return "";
    }
    if(numRows == 1){
        return s;
    }
    var len = s.length;
    var circlesAllStr = numRows + (numRows - 2);
    var chunkAllRow = numRows - 1; //每一个循环块的总行数
    var allCols = Math.ceil(len / circlesAllStr) * chunkAllRow;
    var allArr = [];
    for (var m = 0; m < allCols; ++m) {
        var arr = new Array(numRows);
        allArr.push(arr);
    }

    for (var i = 0; i < s.length; i++) {
        var chunk = Math.floor(i / circlesAllStr);
        var chunkRow = (i % circlesAllStr) < numRows ? 0 : ((i % circlesAllStr) % numRows + 1);
        var row = chunk * chunkAllRow + chunkRow; //行
        var col = (i % circlesAllStr) < numRows ? (i % circlesAllStr) : (circlesAllStr - (i % circlesAllStr));
        allArr[row][col] = s[i];
    }

    var resultArr = "";
    for (var x = 0; x < numRows; ++x) {
        for (var y = 0; y < allArr.length; ++y) {
            var idata = allArr[y][x];
            if(idata ){
                resultArr += idata;
            }
        }
    }

    return resultArr;
};

console.log(convert("ABB", 1));