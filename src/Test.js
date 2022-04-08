function Foo() {
    Foo.getValue = function () {
        console.log(1);
    }
    this.getValue = function () {
        console.log(2);
    }
}

Foo.prototype.getValue = function () {
    console.log(3);
}

Foo.getValue = function () {
    console.log(4);
}

Foo.getValue();  //静态方法 4

let obj = new Foo();
obj.getValue();   //2
Foo.getValue();  //静态方法被重写 1

function Foo2() {
    Foo2.getValue = function () {
        console.log(5);
    }
    this.getValue = function(){
        // super.getValue();
        this.prototype.getValue();
        console.log(6);
    }
}

Foo2.prototype = new Foo();  //Foo2 继承Foo
let obj2 = new Foo2();
obj2.getValue();    //2
Foo2.getValue();    //5

Foo.getValue();    //1