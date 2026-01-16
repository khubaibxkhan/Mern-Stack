import { useEffect } from "react";
import { useState } from "react"

export const UserList = () => {
    const [ user , setUser ] = useState([]);
    const [ error , setError ] = useState(null);
    const [ loading , setLoading ] = useState(true);

    const API = "https://jsonplaceholder.typicode.com/users";

    const fetchUser = async() => {
        //try block
        try {
            const res = await fetch(API);

            if (!res.ok) {
                throw new Error("Failed to Fetch User Data!")  //if resource is not ok then throw this error
            }

            const data = await res.json();
            console.log(data);
            setUser(data);
        } 

        // Catch block
        catch (err) {
            setError(err.message)
        }

        //finally block
        finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchUser();
    },[]);

    if(loading===true) return <h2>Loading...</h2>;
    if(error) return <h2>{error}</h2>

  return (
    <div>
        <h2>User-Data </h2>
        <hr />
        {user.map((ele) =>
            <div key={ele.id}>
                <h4>Name: {ele.name}</h4>
                <p>Username: {ele.username}</p>
                <p>email: {ele.email}</p>
                <p>Phone: {ele.phone}</p>
                <p>Company Name: {ele.company.name}</p>
                <hr/>
            </div>
        )}
    </div>
  )
}
