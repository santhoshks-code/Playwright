interface Point {
    readonly x:number;
    readonly y:number;
}

const Point: Point = {
    x:10,
    y:20
};

console.log(Point);

// once set readonly cannot be changed, Cant modify