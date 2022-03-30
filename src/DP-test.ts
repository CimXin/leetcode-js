// // // function findNumberOfLIS(nums: number[]): number {

// // //     let dp = Array(nums.length).fill(1);
// // //     let maxLen = 1;
// // //     let combinas = Array(nums.length).fill(1);

// // //     for (let i = 1; i < nums.length; i++) {
// // //         for (let j = 0; j < i; j++) {
// // //             if (nums[i] > nums[j]) {

// // //                 if (dp[j] + 1 > dp[i]) {
// // //                     dp[i] = dp[j] + 1;
// // //                     combinas[i] = combinas[j];
// // //                 } else {
// // //                     combinas[i] += combinas[j];
// // //                 }

// // //             }
// // //         }
// // //         maxLen = Math.max(maxLen, dp[i]);
// // //     }

// // //     let res = 0;
// // //     for (let i of dp) {
// // //         if (maxLen == i) {
// // //             res++;
// // //         }
// // //     }
// // //     return res;
// // // };


// // // let res = findNumberOfLIS([1, 3, 5, 4, 7]);
// // // console.log(res);

// // function maxEnvelopes(envelopes: number[][]): number {
// //     let dp = Array(envelopes.length).fill(1);
// //     envelopes.sort((a, b) => a[0] == b[0] ? b[1] - a[1] : a[0] - b[0]);

// //     let res = 1;
// //     for (let i = 1; i < envelopes.length; i++) {
// //         for (let j = 0; j < i; j++) {
// //             if (envelopes[i][1] > envelopes[j][1]) {
// //                 dp[i] = Math.max(dp[i], dp[j] + 1);
// //             }
// //         }
// //         res = Math.max(res, dp[i]);
// //     }
// //     return res;
// // };

// // maxEnvelopes([[4, 5], [4, 6], [6, 7], [2, 3], [1, 1]]
// // );

// function maxProduct(nums: number[]): number {
//     let dp = Array(nums.length).fill(Number.MIN_SAFE_INTEGER);
//     dp[0] = nums[0];

//     for (let i = 1; i < nums.length; i++) {
//         dp[i] = Math.max(dp[i - 1] * nums[i], dp[i]);

//     }

//     return Math.max(...dp);
// };

// maxProduct([2, 3, -2, 4]);


// function maxSumDivThree(nums: number[]): number {
//     let dp = Array(3).fill(0);
//     let dp2 = null;
//     for (let n of nums) {
//         dp2 = dp.slice();
//         for (let s of dp2) {
//             dp[(s + n) % 3] = Math.max(s + n, dp[(s + n) % 3]);
//         }
//     }

//     return dp[0];
// };

// maxSumDivThree([3, 6, 5, 1, 8]);
 
let map = new Map();
map.set("123", 123);
map.set("321", 321);
console.error(map);
var s = "123";
s.charCodeAt(0) + s.charCodeAt(1) + s.charCodeAt(2);