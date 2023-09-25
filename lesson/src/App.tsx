import "./App.css";
import Number from "./Types/Number";
import String from "./Types/String";
import Boolean from "./Types/Boolean";
import Object from "./Types/Object";
import NestedObjects from "./Types/NestedObjects";
import Arrays from "./Types/Arrays";
import Tuple from "./Types/Tuple";
import Any from "./Types/Any";
import Union from "./Types/Union";
import TypeAlias from "./Types/TypeAlias";
import FunctionType from "./Types/FunctionType";

function App() {
  return (
    <>
      <Number />
      <String />
      <Boolean />
      <Object />
      <NestedObjects />
      <Arrays />
      <Tuple />
      <Any />
      <Union />
      <TypeAlias />
      <FunctionType />
    </>
  );
}

export default App;
