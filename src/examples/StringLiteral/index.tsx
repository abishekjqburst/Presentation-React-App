const StringLiteral = () => {
  type Endpoint = "/api/get" | "/api/set" | "/api/delete" | "/api/edit";

  function api_call(direction: Endpoint): string {
    return `${direction}`;
  }

  return (
    <>
      <p>Api Call goes to: {api_call("/api/get")}</p>
      {/* <p>Api Call goes to: {api_call("/api/call")}</p> */}
    </>
  );
};

export default StringLiteral;
