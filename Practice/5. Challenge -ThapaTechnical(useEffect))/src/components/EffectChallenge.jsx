// Description: In this challenge, you'll create a React component that dynamically manages state
// using 'useState' and 'useEffect' hooks. Your component will include:

// 1. A counter that increments when a button is clicked.
// 2. An input field where users can type their name.
// 3. The document title will update to show the current count.

import { useState , useEffect } from 'react'
export const EffectChallenge = () => {
    const [count , setCount] = useState(0);
    const [name , setName] = useState("");

    useEffect(() => {
        document.title = `Count : ${count}`;
    }, [count]);

    useEffect(() => {
        console.log(name);
    }, [name]);

    const userName = (e) => {
        setName(e.target.value);
    };

    const increment = () => {
        setCount(count + 1)
    };

  return (
    <div>
      <h1>Use-Effect</h1>

      <p>
        Count : <span>{count}</span>
      </p>

      <button onClick={increment}>increment </button>

      <p>
        Name : <span>{name}</span> 
      </p>

      <input type="text" value={name} onChange={userName} />
    </div>
  );
};

