const AnyvsUnknown = () => {
  let myAny: any;
  myAny = 123;
  myAny = "Hello";

  // Using 'unknown' type
  let myUnknown: unknown;
  myUnknown = 123;
  myUnknown = "Hello";

  return (
    <>
      {/* <p>{myAny.foo()}</p> */}
      {/* <p>{myUnknown.foo()}</p> */}
    </>
  );
};

export default AnyvsUnknown;
