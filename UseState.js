import React, {useState} from "react";


function UseState(){
    const [count,setCount] = useState(0);
    return(
        <div>
            <h2>Use State Hooks</h2>
            <p> Count Value {count}</p>
            <button onClick={()=> setCount(count+1)}>Increment Count Value</button>
            <button onClick={()=> setCount(count-1)}>Decrement Count Value</button>

            <button onClick={()=>setCount(0)}>Reset Count </button>

        </div>
    )
}
export default  UseState;