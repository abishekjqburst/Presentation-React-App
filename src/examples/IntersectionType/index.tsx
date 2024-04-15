const IntersectionType = () => {
  // Define two types
  type Animal = {
    name: string;
  };

  type Bird = {
    fly: () => string;
  };

  type FlyingBird = Animal & Bird;

  const eagle: FlyingBird = {
    name: "Eagle",
    fly: () => "Flying high",
  };

  return (
    <>
      <p>Name: {eagle.name}</p>
      <p>Move: {eagle.fly()}</p>
    </>
  );
};

export default IntersectionType;
