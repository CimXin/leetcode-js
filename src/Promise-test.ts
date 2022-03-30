
// let p = new Promise((resolve, reject) => {
//     console.error("211");
//     setTimeout(() => {
//         console.log("定时器执行完毕", resolve);
//         resolve(200);
//     }, 1000);
// });

// p.then((res) => {
//     console.log("res", res);
// }, (err) => {
//     console.log("err", err);
// }).then((res) => {
//     console.log("res1", res);

// }, (err) => {
//     console.log("err1", err);

// });
// console.error("111");

function person() {
    console.log(this.name);
}

Function.prototype.newCall = function (obj) {
    console.log(this);
}
let egg = { name: "mic" };

person.newCall(egg);