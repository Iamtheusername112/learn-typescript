function Tuple() {
  const user: {
    userName: string;
    email: string;
    password: string;
    role: [string, string];
  } = {
    userName: "Francis",
    email: "francis@gmail.com",
    password: "passwordismypassword",
    role: ["Admin", "User"],
  };
  return (
    <div>
      <h2>TUPLE</h2>
      <p>
        A Tuple is not just a fixed-length array but also a fixed type. Let's
        say we wanna add a role of a person where we know it could either be an
        Admin or a User, the Tuple becomes handy here. let's see it play out in
        the example below. Note that the Tuple can be accessed just like an
        array
      </p>
      <div>
        {user.role[0] === "Admin" ? (
          <p>This is the Admin </p>
        ) : (
          <p>This is the User </p>
        )}
      </div>
    </div>
  );
}

export default Tuple;
