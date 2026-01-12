import { useState } from "react";
import "./Live.css"
export const Live = () => {
    const [message , setMessage] = useState("");

    const handleChange = (e) => {
        setMessage(e.target.value)
    }

  return (
    <>
        <p className="live-display"> {message} </p>
        
        <input 
            className="live-manager"
            type="text"
            onChange={handleChange}
            placeholder="Enter a text"
        />
    </>
  );
};
