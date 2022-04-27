/**
 * 碰撞1，点是否在线段上
 */
let pointInLine = function (x1: number, y1: number, x2: number, y2: number, px: number, py: number) {
    let ret = (py - y1) * (x1 - x2) - (px - x1) * (y1 - y2);
    console.log(ret);
    return ret == 0;
}

/**
 * 碰撞2，点与圆的碰撞
 */
let pointInCircle = function (x1: number, y1: number, r: number, px: number, py: number) {
    return Math.pow(px - x1, 2) + Math.pow(py - y1, 2) <= Math.pow(r, 2);
}

/**
 * 点与三角形的碰撞
 */
let pointInTrangle = function (x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, px: number, py: number) {
    let ret1 = (py - y1) * (x1 - x2) - (px - x1) * (y1 - y2);
    let ret2 = (y3 - y1) * (x1 - x2) - (x3 - x1) * (y1 - y2);

    if (ret1 * ret2 < 0) return false;

    ret1 = (py - y2) * (x2 - x3) - (px - x2) * (y2 - y3);
    ret1 = (y1 - y2) * (x2 - x3) - (x1 - x2) * (y2 - y3);
    if (ret1 * ret2 < 0) return false;

    ret1 = (py - y1) * (x1 - x3) - (px - x1) * (y1 - y3);
    ret2 = (y2 - y1) * (x1 - x3) - (x2 - x1) * (y1 - y3);
    if (ret1 * ret2 < 0) return false;
    return true;
}

/**
 * OOB包围盒碰撞
 */

export module OOB {
    // 二维平面向量
    export class Vector2d {
        constructor(public vx = 1, public vy = 1) {
            this.vx = vx;
            this.vy = vy;
        }
        // 获取向量长度
        length() {
            return Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        }
        // 向量的数量积
        static dot(vec, vec2) {
            return vec.vx * vec2.vx + vec.vy * vec2.vy;
        }
        // 向量的加法运算
        static add(vec, vec2) {
            const vx = vec.vx + vec2.vx;
            const vy = vec.vy + vec2.vy;
            return new Vector2d(vx, vy);
        }
        // 向量的减法运算
        static sub(vec, vec2) {
            const vx = vec.vx - vec2.vx;
            const vy = vec.vy - vec2.vy;
            return new Vector2d(vx, vy);
        }
        //向量的旋转 
        static rotate(vec: Vector2d, angle: number) {
            const cosVal = Math.cos(angle);
            const sinVal = Math.sin(angle);
            const vx = vec.vx * cosVal - vec.vy * sinVal;
            const vy = vec.vx * sinVal + vec.vy * cosVal;
            return new Vector2d(vx, vy);
        }
    }

    export class Rect {
        constructor(public x: number, public y: number, public w: number, public h: number, public rotation: number) {

        }

        get C() { return new Vector2d(this.x, this.y); }
        get _A1() { return new Vector2d(this.x - this.w / 2, this.y - this.h / 2); }  // 4角顶点
        get _A2() { return new Vector2d(this.x + this.w / 2, this.y - this.h / 2); }
        get _A3() { return new Vector2d(this.x + this.w / 2, this.y + this.h / 2); }
        get _A4() { return new Vector2d(this.x - this.w / 2, this.y + this.h / 2); }
        // get _axisX(){ return new Vector2d(1,0); } // 未旋转时的对称轴X
        // get _axisY(){ return new Vector2d(0,1); } // 未旋转时的对称轴Y
        get _CA1() { return Vector2d.sub(this._A1, this.C); }
        get _CA2() { return Vector2d.sub(this._A2, this.C); }
        get _CA3() { return Vector2d.sub(this._A3, this.C); }
        get _CA4() { return Vector2d.sub(this._A4, this.C); }
        // get _rotation(){ return this.rotation / 180 * Math.PI; }
        get A1() { return this.rotation % 360 === 0 ? this._A1 : Vector2d.add(this.C, Vector2d.rotate(this._CA1, this._rotation)); } // 计算上旋转后4角顶点
        get A2() { return this.rotation % 360 === 0 ? this._A2 : Vector2d.add(this.C, Vector2d.rotate(this._CA2, this._rotation)); }
        get A3() { return this.rotation % 360 === 0 ? this._A3 : Vector2d.add(this.C, Vector2d.rotate(this._CA3, this._rotation)); }
        get A4() { return this.rotation % 360 === 0 ? this._A4 : Vector2d.add(this.C, Vector2d.rotate(this._CA4, this._rotation)); }
        // get axisX(){ return this.rotation % 360 === 0 ?  this._axisX :  Vector2d.rotate(this._axisX,this._rotation); } // 计算上旋转后的对称轴X
        // get axisY(){ return this.rotation % 360 === 0 ?  this._axisY :  Vector2d.rotate(this._axisY,this._rotation); } // 计算上旋转后的对称轴Y
        get _vertexs() { return [this._A1, this._A2, this._A3, this._A4]; }
        get vertexs() { return [this.A1, this.A2, this.A3, this.A4]; } // 4角顶点数组
        public get _rotation() {
            return this.rotation / 180 * Math.PI;
        }

        private get _axisX() {
            return new Vector2d(1, 0);
        }
        private get _axisY() {
            return new Vector2d(0, -1);
        }
        public get axisX() {
            if (this.rotation % 360 == 0) {
                return this._axisX;
            }
            return Vector2d.rotate(this._axisX, this._rotation);
        }
        public get axisY() {
            if (this.rotation % 360 == 0) {
                return this._axisY;
            }
            return Vector2d.rotate(this._axisY, this._rotation);
        }

        public OOBRectRectIntersect(rect1: Rect, rect2: Rect) {
            let rect1AxisX = rect1.axisX;
            let rect1AxisY = rect1.axisY;
            let rect2AxisX = rect2.axisX;
            let rect2AxisY = rect2.axisY;

            if (!this.cross(rect1, rect2, rect1AxisX)) return false;
            if (!this.cross(rect1, rect2, rect1AxisY)) return false;
            if (!this.cross(rect1, rect2, rect2AxisX)) return false;
            if (!this.cross(rect1, rect2, rect2AxisY)) return false;
            return true;
        }

        public cross(rect1: Rect, rect2: Rect, axis: Vector2d) {
            const vertexs1ScalarProjection = rect1.vertexs.map(vex => Vector2d.dot(vex, axis)).sort((a, b) => a - b); // 矩形1的4个顶点投影并排序
            const vertexs2ScalarProjection = rect2.vertexs.map(vex => Vector2d.dot(vex, axis)).sort((a, b) => a - b); // 矩形2的4个顶点投影并排序
            const rect1Min = vertexs1ScalarProjection[0]; // 矩形1最小长度
            const rect1Max = vertexs1ScalarProjection[vertexs1ScalarProjection.length - 1]; // 矩形1最大长度
            const rect2Min = vertexs2ScalarProjection[0]; // 矩形2最小长度
            const rect2Max = vertexs2ScalarProjection[vertexs1ScalarProjection.length - 1]; // 矩形2最大长度
            return rect1Max >= rect2Min && rect2Max >= rect1Min;  // 相交判断 
        }
    }
}
let rect1 = new OOB.Rect(0, 0, 2, 2, 0);
let rect2 = new OOB.Rect(3, 2, 2, 2, 0);



console.log(rect1.OOBRectRectIntersect(rect1, rect2));









// console.log(pointInLine(0, 0, 2, 2, 2, 3));
// console.log(pointInCircle(1, 1, 1, 1, 0.2));

// console.log(pointInTrangle(0, 0, 2, 0, 2, 3, 0, 0));
