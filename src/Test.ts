function palindromePairs(words: string[]): number[][] {
    let map = new Map<string, number>();

    for (let i = 0; i < words.length; i++) {
        map.set(words[i].split("").reverse().join(""), i);
    }
    let res = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (check(word) && map.has('') && word !== '') {
            res.push([map.get(''), i]);
        }

        for (let j = 0; j < word.length; j++) {
            let left = word.substring(0, j);
            let right = word.substring(j, word.length);

            if (check(left) && map.has(right) && map.get(right) != i) {
                res.push([map.get(right), i]);
            }
            if (check(right) && map.has(left) && map.get(left) != i) {
                res.push([i, map.get(left)]);
            }
        }
    }
    return res;
};

function check(str: string) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str.charAt(left) != str.charAt(right)) {
            return false;
        }
        left++; right--;
    }
    return true;
}

palindromePairs(["abcd", "dcba", "lls", "s", "sssll"]);