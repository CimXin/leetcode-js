class A {
    name = "mic";
    log() {
        console.log(this.name);
    }
}
class B extends A {
    name = "NB"
}

// function FUNC() {
//     this.name = "FUNC";
//     this.log = function () {
//         console.log(this.name);
//     }
// }

let Func = {
    name: "FUNC",
    log: function () {
        console.log(this.name);
    }
}

Func.log();
var name = "GLOBAL";

var a = Func.log;
a();
