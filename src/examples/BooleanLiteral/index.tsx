const BooleanLiteral = () => {
  // Define a type using boolean literals
  type Status = true | false;

  // Function that toggles the status and returns a Status type
  function toggleStatus(status: Status): Status {
    return !status;
  }

  // Initial status
  let currentStatus: Status = true;

  // Toggling the status
  currentStatus = toggleStatus(currentStatus);

  // Logging the result
  return <p>Current Status:, ${currentStatus}</p>;
};

export default BooleanLiteral;
