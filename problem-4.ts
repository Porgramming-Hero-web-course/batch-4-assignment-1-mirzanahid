{
  // problem-4

  type Circle = {
    shape: "circle";
    radious: number;
  };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  type Shape = Circle | Rectangle;

  function calculateShapeArea(shape: Shape): void {
    if (shape.shape === "circle") {
      const shpaeArea = shape.radious * shape.radious * Math.PI;
      console.log(parseFloat(shpaeArea.toFixed(2)));
    } else if (shape.shape === "rectangle") {
      const shapeArea = shape.height * shape.width;
      console.log(parseFloat(shapeArea.toFixed(2)));
    }
  }

  // const circleArea = calculateShapeArea({ shape: "circle",
  //   radious: 5 });

  // const rectangleArea = calculateShapeArea({
  //   shape: "rectangle",
  //   width: 4,
  //   height: 6,
  // });
}
