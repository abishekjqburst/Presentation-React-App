import React from "react";
import "./App.css";
import TypeAssertions from "./examples/TypeAssertions";
import StringLiteral from "./examples/StringLiteral";
import NumericLiteral from "./examples/NumericLiteral";
import BooleanLiteral from "./examples/BooleanLiteral";
import UnionType from "./examples/UnionType";
import IntersectionType from "./examples/IntersectionType";
import AnyvsUnknown from "./examples/AnyvsUnknown";
import TypevsInterface from "./examples/TypevsInterface";
import Generics from "./examples/Generics";

const App: React.FC = () => {
  return (
    <div>
      <h1>React App with TypeScript Features</h1>
      <TypeAssertions />
      {/* <StringLiteral />
      <NumericLiteral />
      <BooleanLiteral />
      <UnionType />
      <IntersectionType />
      <AnyvsUnknown />
      <TypevsInterface />
      <Generics /> */}
    </div>
  );
};

export default App;
