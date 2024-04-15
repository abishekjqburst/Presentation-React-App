const TypeAssertions = () => {
  let myString: any = "Hello";
  let stringLength: number = (myString as string).length; // Type Assertion

  return (
    <>
      <p>
        String Length of "{myString}" is: {stringLength}
      </p>
    </>
  );
};

export default TypeAssertions;
