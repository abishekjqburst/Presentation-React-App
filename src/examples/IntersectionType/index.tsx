const IntersectionType = () => {
  // Define two types
  type Animal = {
    name: string;
  };

  type Bird = {
    fly: () => string;
  };

  // Define an intersection type
  type FlyingBird = Animal & Bird;

  // Create an object that satisfies the FlyingBird type
  const eagle: FlyingBird = {
    name: "Eagle",
    fly: () => "Flying high",
  };

  return (
    <>
      <p>Name:, {eagle.name}</p>
      <p>{eagle.fly()}</p>
    </>
  );
};

export default IntersectionType;
