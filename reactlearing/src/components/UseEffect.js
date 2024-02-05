import React, { useState, useEffect } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  const [product, setProduct] = useState("Eggs");

  useEffect(() => {
    console.log(`${product} will rule the world`);
  }, [product]);

  return (
    <div>
      <h2>Use Effect Hook</h2>
      Products {product}'s Count {count}
      <div>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <button onClick={() => setCount(count - 1)}>Decrement Count</button>
      </div>
      <div>
        Change the product{" "}
        <input type="text" onChange={(e) => setProduct(e.target.value)} />
      </div>
    </div>
  );
}
export default UseEffect;
