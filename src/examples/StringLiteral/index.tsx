const StringLiteral = () => {
  // Define a type using string literals
  type Direction = "left" | "right" | "up" | "down";

  // Function that takes a Direction type parameter
  function move(direction: Direction): string {
    return `Moving ${direction}`;
  }

  // Calling the function with allowed string literal values

  // This will cause a TypeScript error because "forward" is not one of the allowed values
  // move("forward");

  return (
    <>
      <p>{move("left")}</p>
      <p>{move("up")}</p>
    </>
  );
};

export default StringLiteral;
