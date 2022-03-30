function lengthOfLongestSubstring(s: string): number {
    let left = 0, right = 0;
    let res = 0;
    // let freq = Array(124).fill(0);
    let freq = new Set();

    while (right < s.length) {

        while (freq.has(s.charAt(right))) {
            freq.delete(s.charAt(left));
            left++;
        }
        freq.add(s.charAt(right));
        right++;

        res = Math.max(res, right - left);
    }
    return res;
};

lengthOfLongestSubstring("abcabcbb");