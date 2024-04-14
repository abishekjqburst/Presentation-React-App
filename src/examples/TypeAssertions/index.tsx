const TypeAssertions = () => {
  // Suppose we have a variable of type 'any'
  let myVariable: any = "Hello";

  // We want to get the length of the string
  // We know 'myVariable' is a string, but TypeScript doesn't
  // So, we use type assertion to tell TypeScript that it's a string
  let stringLength: number = (myVariable as string).length;

  console.log(stringLength); // Output: 5

  return (
    <>
      <p>{stringLength}</p>
    </>
  );
};

export default TypeAssertions;
