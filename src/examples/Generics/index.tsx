const Generics = () => {
  // Generic function to echo the input value
  function echo<T>(value: T): T {
    return value;
  }

  // Using the generic function with different types
  const result1: number = echo<number>(10); // Output: 10
  const result2: string = echo<string>("Hello, generics!"); // Output: Hello, generics!

  // You can omit the explicit type argument if TypeScript can infer it
  const result3 = echo(true); // TypeScript infers the type as boolean

  return (
    <>
      <p>{result1}</p>
      <p>{result2}</p>
      <p>{result3}</p>
    </>
  );
};

export default Generics;
