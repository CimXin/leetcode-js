/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var str = "";
   var max = 0;
   for(var i =0; i < s.length;++i){
       var a = s[i];
       var pos = str.indexOf(a);
       if(pos == -1){
           str += a;
       }else{
           if(str.length > max){
               max = str.length;
           }
           str = str.slice(pos+1,str.length);
           str += a;
       }
   }

   if(str.length > max){
       max = str.length;
   }
   return max;
};