import React, { useState } from "react";

function UseState() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function onChangeFirstName(e) {
    setFirstName(e.target.value);
  }
  function onChangeLastName(e) {
    setLastName(e.target.value);
  }

  return (
    <div>
      <h2>useState hook example</h2>
      <br />
      First name:
      <input type="text" value={firstName} onChange={onChangeFirstName} />
      <br />
      Last name:
      <input type="text" value={lastName} onChange={onChangeLastName} />
    </div>
  );
}

export default UseState;
