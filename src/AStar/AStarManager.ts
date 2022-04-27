import { Heap } from "../Tool/Heap";
import { AStarNode, ENodeType } from "./AStarNode";
import { Vector2 } from "./Vector";

class AStarManager {

    private _nodes: AStarNode[][] = null;
    private _openList: Heap<AStarNode> = null;
    private _closeList: AStarNode[] = [];

    private static _instance: AStarManager;
    public static get ins() {
        if (!this._instance) {
            this._instance = new AStarManager();
        }
        return this._instance;
    }

    public constructor() {
        this._openList = new Heap<AStarNode>((a: AStarNode, b: AStarNode) => {
            return a.f - b.f;
        });
    }

    public clear() {

    }
    private _mapW: number;
    private _mapH: number;
    public init(w: number, h: number, walls: any[]) {

        this._mapH = h; this._mapW = w;
        this._nodes = Array(h).fill(null).map(() => Array(w).fill(null)) as AStarNode[][];
        for (let x = 0; x < w; x++) {
            for (let y = 0; y < h; y++) {
                let type = ENodeType.Road;
                for (let wall of walls) {
                    if (wall[0] == x && wall[1] == y) type = ENodeType.Wall;
                }
                this._nodes[y][x] = new AStarNode(x, y, type);
            }
        }
        this.print(null);
    }

    private print(paths: AStarNode[]) {
        let h = this._nodes.length;
        let w = this._nodes[0].length;
        let strs = "";
        for (let y = 0; y < h; y++) {
            let str = "";
            for (let x = 0; x < w; x++) {
                let node = this._nodes[y][x];
                if (paths && paths.includes(node)) {
                    str = str + " " + "*";
                } else {
                    str = str + " " + node.type;
                }
            }
            str += "\n";
            strs += str;
        }
        console.log(strs);
    }

    private _dirs = [
        new Vector2(1, 0), new Vector2(-1, 0), new Vector2(0, 1), new Vector2(0, -1),
        // new Vector2(1, 1), new Vector2(-1, -1), new Vector2(1, -1), new Vector2(-1, 1),

    ]
    public findPath(startPosX: number, startPosY: number, endPosX: number, endPosY: number) {
        if (startPosX < 0 || startPosY < 0 ||
            startPosX >= this._mapW || startPosY >= this._mapH ||
            endPosX < 0 || endPosY < 0 ||
            endPosX >= this._mapW || endPosY >= this._mapH
        ) {
            console.log("当前有点在地图外");
            return;
        }
        if (startPosX == endPosX && startPosY == endPosY) {
            console.log("起点和终点相等了");
            return;
        }


        let start = this._nodes[startPosY][startPosX];
        start.f = start.g = start.h = 0;
        start.father = null;
        this._closeList.push(start);
        let end = this._nodes[endPosY][endPosX];

        while (true) {
            //将当前点的邻近节点添加到开放列表中
            for (let dir of this._dirs) {
                this.findNearlyNodeAddOpenList(start.x + dir.x, start.y + dir.y, 1, start, end);
            }

            if (this._openList.size == 0) {
                console.log("当前为死路");
                return;
            }
            //step2.将最小消耗点添加到关闭列表中
            start = this._openList.pop();
            this._closeList.push(start);

            //step3.继续下一轮寻找最小点
            // start = this._openList.shift();
            if (start.x == endPosX && start.y == endPosY) {
                //走到终点的位置
                let path = [];
                path.push(end);
                while (end.father != null) {
                    path.push(end.father);
                    end = end.father;
                }
                // console.log(path);
                this.print(path);
                return path;
            }
        }
    }

    private findNearlyNodeAddOpenList(posX: number, posY: number, cost: number, father: AStarNode, end: AStarNode) {
        if (posX < 0 || posY < 0 || posX >= this._mapW || posY >= this._mapH) {
            return;
        }

        let curNode = this._nodes[posY][posX];
        if (curNode == null || curNode.type == ENodeType.Wall ||
             this._openList.data.includes(curNode) || this._closeList.includes(curNode)) {
            return;
        }

        curNode.father = father;
        curNode.g = father.g + cost;
        curNode.h = this.getDis(curNode.x, curNode.y, end.x, end.y);
        this._openList.push(curNode);
    }

    private getDis(startX: number, startY: number, endX: number, endY: number) {
        return Math.abs(startX - endX) + Math.abs(startY - endY);
    }
}

function main() {
    let walls = [
        // [1, 0], [1, 1], [1, 2], [1, 3], [1, 4],

        [3, 1], [3, 2], [3, 3], [3, 4], [3, 0],

        [5, 0],

        [6, 3], [5, 5]
    ];
    AStarManager.ins.init(7, 6, walls);
    console.log("---init end");

    AStarManager.ins.findPath(0, 0, 6, 4);
}
main();