function String() {
  function concatenateStrings(a: string, b: string) {
    return a + b;
  }

  const string1 = "Hello world, ";
  const string2 = "I am Francis";

  const concatenatedString = concatenateStrings(string1, string2);
  return (
    <div>
      <h2>Concatenating strings</h2>
      <p> {concatenatedString} </p>
    </div>
  );
}

export default String;
