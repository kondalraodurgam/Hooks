import React, { useState } from "react";

function UseState() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [output, setOutput] = useState("");

  function onChangeFirstName(e) {
    setFirstName(e.target.value);
  }
  function onChangeLastName(e) {
    setLastName(e.target.value);
  }
  function onSave(e) {
    e.preventDefault();
    setOutput(firstName + " " + lastName + " saved!");
  }

  return (
    <div>
      <h2>useState hook example</h2> <br />
      First name:
      <input type="text" value={firstName} onChange={onChangeFirstName} />
      <br />
      Last name:
      <input type="text" value={lastName} onChange={onChangeLastName} /> <br />
      <hr />
      <input type="button" onClick={onSave} value="Save" /> <br />
      <div>{output}</div>
      <br />
    </div>
  );
}

export default UseState;
