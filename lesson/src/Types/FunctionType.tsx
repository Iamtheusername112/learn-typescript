function FunctionType() {
  /**Functions can also be assigned like types, for instance we would say
   *  const person: string or number or whatever, this same way we can assing a function as well
   * so lets say we have a function called 'add' that will add  two numbers, so later in our code, we can also assing this function 'add' to another variable */

  function add(n1: number, n2: number) {
    return n1 + n2;
  }
  let combinedValues: (a: number, b: number) => number = add;
  //Here we a assigning combinedValues a function that takes 2 parameters a & b which are numbers and returns a number as well
  combinedValues = add;

  return (
    <div>
      <h2>Function Type</h2>
      <p> {combinedValues(6, 6)} is a result of combined values </p>
    </div>
  );
}

export default FunctionType;
