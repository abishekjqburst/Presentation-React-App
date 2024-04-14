const UnionType = () => {
  // Define a union type
  type ID = number | string;

  // Function that prints an ID
  function printID(id: ID) {
    return `ID:, ${id}`;
  }

  // Calling the function with different types of IDs
  return (
    <>
      <p>{printID(123)}</p>
      <p>{printID("ABC")}</p>
    </>
  ); // Output: ID: 123 // Output: ID: ABC
};

export default UnionType;
