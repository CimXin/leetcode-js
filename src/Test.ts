
async function getName() {
    let promise = new Promise((resolve, reject) => {
        resolve("mic11")
    });
    promise["mark"] = "getName"
    return promise;
}
async function test() {
    let promise = getName();
    console.log(promise["mark"]);
}

test();

console.log(typeof(null))
