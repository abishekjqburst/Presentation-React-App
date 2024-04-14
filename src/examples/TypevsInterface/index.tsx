const TypevsInterface = () => {
  // Using a type
  type Point = {
    x: number;
    y: number;
  };

  // Using an interface
  interface PointInterface {
    x: number;
    y: number;
  }

  // Both can be used to define objects with the same structure
  //   const point1: Point = { x: 10, y: 20 };
  //   const point2: PointInterface = { x: 5, y: 15 };

  //   // We can extend types but not interfaces
  //   type ExtendedPoint = Point & { z: number };

  // Type assertion works for types
  let point3 = {} as Point;
  point3.x = 3;
  point3.y = 7;

  // Interfaces support declaration merging
  interface PointInterface {
    z: number;
  }

  const point4: PointInterface = { x: 1, y: 2, z: 3 };

  return (
    <>
      <p>{point4.x}</p>
    </>
  );
};

export default TypevsInterface;
