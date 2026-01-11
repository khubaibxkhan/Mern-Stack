import { useState } from "react";

export const Counter = () => {
    const [count , setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count+ 1);
    }
    const handleDecrement = () => {
        setCount(count - 1);
    }

  return( 
    <>
        <h3 className="count-display">{count}</h3>
        <div className="button-set">
        <button className="increment-btn" onClick={handleIncrement}>Increment: {count} </button>
        <button className="decrement-btn" onClick={handleDecrement}>Decrement</button>
        </div>
    </>
  );
};

