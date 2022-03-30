// function minEatingSpeed(piles: number[], h: number): number {
//     let low = 1;
//     let high = Math.max(...piles);

//     while (low <= high) {
//         let mid = low + ((high - low) >> 1);
//         if (canEachAll(piles, h, mid)) {
//             high = mid - 1;
//         } else {
//             low = mid + 1;
//         }
//     }
//     return low;
// };

// function canEachAll(piles, H, mid) {
//     let h = 0;
//     for (let p of piles) {
//         h += Math.ceil(p / mid);

//     }
//     return h <= H;
// }

// minEatingSpeed([3, 6, 7, 11], 8);


// function binarySearch(arr: number[], target) {
//     let left = 0;
//     let right = arr.length - 1;
//     if (target < arr[left]) return -1;
//     while (left < right) {
//         const mid1 = left + ((right - left + 1) >> 1);
//         const mid = Math.floor((right - left + 1) / 2) + left;
//         console.error(mid1, mid);

//         if (target < arr[mid]) {
//             right = mid - 1;
//         } else {
//             left = mid;
//         }
//     }
//     return left;
// }


// function findRadius(housers: number[], heaters: number[]) {
//     heaters.sort((a, b) => a - b);

//     let ans = 0;
//     for (let house of housers) {
//         let i = binarySearch(heaters, house);  //离house最近的左加热器
//         let j = i + 1;    //离house的最近的右加热器
//         let leftDistance = i < 0 ? Number.MAX_VALUE : house - heaters[i];
//         let rightDistance = j >= heaters.length ? Number.MAX_VALUE : heaters[j] - house;
//         let cur = Math.min(leftDistance, rightDistance);
//         ans = Math.max(ans, cur);
//     }
//     return ans;
// }

// console.log(findRadius([1, 2, 3], [1, 2, 3]));


let N = 0;
function swimInWater(grid: number[][]) {
    N = grid.length;

    let left = 0;
    let right = N * N - 1;
    while (left < right) {
        let mid = (left + right) >> 1;
        let visitedMap = new Map<string, boolean>();
        if (mid >= grid[0][0] && dfs(grid, 0, 0, visitedMap, mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}
let dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
function dfs(grid: number[][], x: number, y: number, visitedMap: Map<string, boolean>, mid: number): boolean {
    visitedMap.set(`${x}_${y}`, true);
    for (let dir of dirs) {
        let newX = x + dir[0];
        let newY = y + dir[1];
        if (!visitedMap.has(`${newX}_${newY}`) && grid[newX][newY] <= mid && inArea(newX, newY)) {
            if (newX == N - 1 && newY == N - 1) {
                return true;
            }
            if (dfs(grid, newX, newY, visitedMap, mid)) {
                return true;
            }
        }
    }
    return false;
}

function inArea(x, y) {
    return x >= 0 && x < N && y >= 0 && y < N;
}

swimInWater([[0, 2], [1, 3]])