function Object() {
  const person: { name: string; age: number } = {
    name: "Francis",
    age: 25,
  };

  return (
    <div>
      <h2>Object Example</h2>
      <p>
        {person.name} is {person.age} years and a full-stack web dveloper.
      </p>
    </div>
  );
}

export default Object;
