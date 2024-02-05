import React, { useEffect, useState } from "react";

function UseEffectAPI() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log("Error fetching user data:", err);
      });
  }, []);
  return (
    <div>
      <h2>useEffect API Hook example</h2>
      <ul>
        {data.map((dat) => (
          <li key={dat.id}>{dat.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default UseEffectAPI;
