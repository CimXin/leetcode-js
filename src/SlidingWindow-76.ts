function minWindow(s: string, t: string): string {

    let windowFre = Array(123).fill(0);
    let tFre = Array(123).fill(0);

    for (let i = 0; i < t.length; i++) {
        tFre[t.charCodeAt(i)]++;
    }

    let distance = 0;

    let len = s.length;
    let start = 0;
    let left = 0, right = 0;
    let minLen = len + 1;

    while (right < len) {
        //1,移动right直至刚好覆盖匹配到字符串
        // if (tFre[s.charCodeAt(right)] == 0) {
        //     right++;
        //     continue;
        // }
        while (tFre[s.charCodeAt(right)] == 0) {
            right++;
        }

        if (windowFre[s.charCodeAt(right)] < tFre[s.charCodeAt(right)]) {
            distance++;
        }
        windowFre[s.charCodeAt(right)]++;
        right++;

        /** 此时刚好覆盖匹配到的字符串的长度等于t的长度时 left开始右移，直到移动到刚好覆盖不了匹配的字符串 */
        while (distance == t.length) {
            if (right - left < minLen) {
                minLen = right - left;
                start = left;
            }

            // if (tFre[s.charCodeAt(left)] == 0) {
            //     left++;
            //     continue;
            // }
            while (tFre[s.charCodeAt(left)] == 0) {
                left++;
            }

            if (windowFre[s.charCodeAt(left)] == tFre[s.charCodeAt(left)]) {
                distance--;
            }
            windowFre[s.charCodeAt(left)]--;
            left++;
        }
    }

    if (minLen == len + 1) {
        return "";
    }
    return s.slice(start, minLen);
};


minWindow("ADOBECODEBANC",
    "ABC")