const TypevsInterface = () => {
  type Point = number;
  interface PointInterface {
    x: number;
    y: number;
    z: number;
  }

  let point3: Point = 5;

  const point4: PointInterface = { x: 1, y: 2, z: 3 };

  return (
    <>
      <p>Point 3: {point3}</p>
      <p>Point 4: {point4.x}</p>
    </>
  );
};

export default TypevsInterface;
