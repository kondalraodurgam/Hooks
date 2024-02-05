import React, { useCallback, useState } from "react";

function UseCallBack() {
  const [query, setQuery] = useState("");

  const handleQuery = useCallback((event) => {
    setQuery(event.target.value);
  });
  return (
    <div>
      <h2>Use CallBack Hook</h2>
      <input type="text" value={query} onChange={handleQuery} />
    </div>
  );
}

export default UseCallBack;
