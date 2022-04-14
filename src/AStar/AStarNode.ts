import { Vector2 } from "./Vector";

export enum ENodeType {
    Road,
    Wall,
}
export class AStarNode {
    public x: number;
    public y: number;
    // public pos: Vector2 = new Vector2(0, 0);
    public type: ENodeType;

    /** 
     * 根据寻路消耗公式 f(寻路消耗) = g(离起点的距离)+h(离终点的距离)
     */
    public f: number;
    public g: number;
    public h: number;

    public father: AStarNode;

    public constructor(x: number, y: number, type: ENodeType) {
        this.x = x;
        this.y = y;
        this.type = type;
    }


}