import React, { useReducer } from "react";

function cartReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
}

function UseReducer() {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addItem = (item) => {
    dispatch({ type: "add", payload: item });
  };
  const removeItem = (item) => {
    dispatch({ type: "remove", payload: item });
  };
  return (
    <div>
      <h2>UseReducer Hook</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addItem({ id: 1, name: "Kondal", price: 99 })}>
        Add Item
      </button>
    </div>
  );
}
export default UseReducer;
