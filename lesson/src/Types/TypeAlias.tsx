function TypeAlias() {
  {
    /* The type alias its just like initializing a variable but this time we begin with type instead of const or let */
  }

  type combineable = number | string;

  // this now means that where ever down the code we wanna assign a union type of number and string, we just call conbineable.

  const person: {
    name: string;
    age: combineable;
  } = {
    name: "Francis",
    age: 25,
    // age: "25",
    // Note that what we are saying here is that, in the begining we declared a type 'combineable' and assinged a union type of number and string which means that whenever in our code we wanna assign a union type of number and string, we just call the 'combineable' so we have assigned the combineable to age, that means age can accept either a number or a string and typescript wont complain.
  };
  return (
    <div>
      <h2>Type-Aliases</h2>
      <p>
        {person.name} is {person.age} years old
      </p>
    </div>
  );
}

export default TypeAlias;
