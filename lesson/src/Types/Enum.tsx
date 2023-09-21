function Enum() {
  return (
    <div>
      <p>
        {/*            With Enum, instead of writing the following  
    const ADMIN = 0;
    const READ_ONLY = 1; 
    const AUTHOR = 2;
              we can use the Enum to make is simpler by writing 
              "enum Role {ADMIN, READ_ONLY, AUTHOR }"" and they will take up the values of 1, 2 and 3 by default. Also note we can alternate the position of the numbers, for isntance is i say "{Admin = 4}"", it means the the READ_ONLY and the AUTHOR will take up 5 and 6 by default, you can also use string in the enums */}
      </p>
    </div>
  );
}

export default Enum;
