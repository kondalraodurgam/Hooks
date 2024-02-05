import React, { useMemo } from "react";

function UseMemo({ a, b }) {
  const result = useMemo(() => {
    console.log("calclating");
    return a * b;
  }, [a, b]);
  return (
    <div>
      <h2>Use Memo Hook</h2>
      <p>Result {result}</p>
    </div>
  );
}
export default UseMemo();
