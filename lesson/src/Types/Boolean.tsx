function Boolean() {
  const isAdmin: boolean = true;
  return (
    <div>
      <h2>Boolean</h2>
      <span>
        {isAdmin ? <p>Login as Admin Successful!!</p> : <p>Login Filed!!</p>}
      </span>
    </div>
  );
}

export default Boolean;
