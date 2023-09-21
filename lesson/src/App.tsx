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
    </>
  );
}

export default App;
