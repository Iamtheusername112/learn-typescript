function Union() {
  function combine(input1: string | number, input2: string | number) {
    if (typeof input1 === "number" && typeof input2 === "number") {
      return input1 + input2;
    }
    return input1.toString() + input2.toString();
  }

  const combinedAges = combine(12, 13);
  return (
    <div>
      <h2>Union type</h2>
      <p>{combinedAges}</p>
    </div>
  );
}

export default Union;
