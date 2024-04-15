import { useState } from "react";
const BooleanLiteral = () => {
  type Status = true | false;

  let [currentStatus, setcurrentStatus] = useState<Status>(false);
  return (
    <>
      <p>Current Status: {String(currentStatus)}</p>
      <button onClick={() => setcurrentStatus(!currentStatus)}>
        Change Status
      </button>
    </>
  );
};

export default BooleanLiteral;
