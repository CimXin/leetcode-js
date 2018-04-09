/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s === null || s.length === 0){
        return "";
    }    
    
    var result = "";
    var len = s.length;
    var left, right;
    
    for(var i = 0; i < len; i++){
        left = right = i;

        var str = expandFromCenterAndCheckForPalindrome(s,left,right);
        if(str.length > result.length){
            result = str;
        }
        var str = expandFromCenterAndCheckForPalindrome(s,left,right + 1);
        if(str.length > result.length){
            result = str;
        }
    }
    return result;
};



var expandFromCenterAndCheckForPalindrome = function(s, left, right){
    while(left >= 0 && right < s.length && s[left] === s[right]){
        left--;
        right++;
    }
    
    return s.substring(left+1, right);
}

console.log(longestPalindrome("acbc"));