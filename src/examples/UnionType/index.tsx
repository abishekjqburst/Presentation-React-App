const UnionType = () => {
  type ID = number | string;

  function printID(id: ID) {
    return `ID:, ${id}`;
  }

  return (
    <>
      <p>{printID(123)}</p>
      <p>{printID("ABC")}</p>
    </>
  );
};
export default UnionType;
