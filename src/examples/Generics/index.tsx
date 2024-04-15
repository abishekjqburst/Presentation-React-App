const Generics = () => {
  function print<T>(value: T): T {
    return value;
  }

  const result1: number = print<number>(10);
  const result2: string = print<string>("Hello, generics!");

  const result3 = print(true);

  return (
    <>
      <p>{result1}</p>
      <p>{result2}</p>
      <p>{result3}</p>
    </>
  );
};

export default Generics;
