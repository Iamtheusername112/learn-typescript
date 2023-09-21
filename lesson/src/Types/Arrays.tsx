function Arrays() {
  const countries: string[] = [
    "Germany",
    "USA",
    "Poland",
    "Ukraine",
    "Portugal",
  ];
  return (
    <div>
      <h2>Arrays</h2>
      {/* To get one country */}
      <p>{countries[0]}</p>

      {/* To print the list of all the countries in the array, we have to loop through the array and return the contents for example in a list item and for this we will return them in an ordered list */}

      <ol>
        {countries.map((country) => {
          return <li>{country}</li>;
        })}
      </ol>
    </div>
  );
}

export default Arrays;
