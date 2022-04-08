
interface Point {
    x: number, y: number
}

function checkInTriangle(A: Point, B: Point, C: Point, P: Point) {
    return checkInSide(A, B, C, P) && checkInSide(A, C, B, P) && checkInSide(B, C, A, P);
}

/**
 * 同向法
 * @param X1 三角形的顶点之一
 * @param X2 三角形的顶点之一 
 * @param T 三角形的顶点之一
 * @param P 
 * 其中X1和X2连成直线，判断T和P是否在直线X1X2的同一侧
 */
function checkInSide(X1: Point, X2: Point, T: Point, P: Point) {
    // let k = (X2.y - X1.y) / (X2.x - X1.x);
    // let b = X1.y - k * X1.x;

    // let yT = k * T.x + b;
    // let yP = k * P.x + b;

    let p = (P.y - X1.y) * (X2.x - X1.x) - (X2.y - X1.y) * (P.x - X1.x);
    let t = (T.y - X1.y) * (X2.x - X1.x) - (X2.y - X1.y) * (T.x - X1.x);
    // return (T.y - yT) * (P.y - yP) >= 0;
    return p * t >= 0
}

let A = { x: 2, y: 0 }, B = { x: 2, y: -3 }, C = { x: 4, y: -1 }, P = { x: 3, y: -2 };

let res = checkInTriangle(A, B, C, P);
console.log(res);
// let res = checkInSide({ x: 1, y: 1 }, { x: 2, y: 3 }, { x: 3, y: 1 }, { x: 2, y: 4 });
// console.log(res);