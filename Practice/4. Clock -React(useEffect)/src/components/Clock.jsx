import { useState , useEffect } from 'react'

export const Clock = () => {
    const [date , setDate] = useState(0);

    useEffect(() => {
        setInterval(() => {
            const updatedDate = new Date();
            setDate(updatedDate.toLocaleTimeString());
        }, 1000);
    },[]);

  return (
    <div>
      <h1>Time : {date} </h1>
    </div>
  );
};
