const AnyvsUnknown = () => {
  // Using 'any' type
  let myAny: any;
  myAny = 123; // Works fine
  myAny = "Hello"; // Works fine

  // Using 'unknown' type
  let myUnknown: unknown;
  myUnknown = 123; // Works fine
  myUnknown = "Hello"; // Works fine

  return (
    <>
      <p>{myAny.foo()}</p>
      <p>{myUnknown.foo()}</p>
    </>
  );
};

export default AnyvsUnknown;
