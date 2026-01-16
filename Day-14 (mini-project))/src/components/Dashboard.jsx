import { useEffect , useState } from "react";
import "./Dashboard.css";
import { Card } from "./Card";
export const Dashboard = () => {
    const [ users , setUsers ] = useState([]);
    const [ loading , setLoading ] = useState(true);
    const [ error , setError ] = useState(null);
    const [ search , setSearch ] = useState("");

    const API = "https://jsonplaceholder.typicode.com/users";

    const fetchUsers = async() => {

        try {
            const res = await fetch(API);

            if (!res.ok) {
                throw new Error("Failed to Fetch Users Data!");
            }
            const data = await res.json();
            console.log(data);
            setUsers(data);
        } 

        catch (err) {
            setError(err.message)
        }

        finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchUsers();
    },[]);

    const searchUsers = users.filter((user)=> 
    user.name.toLowerCase().includes(search.toLocaleLowerCase()));

    if (loading) return <h2 className="loading-state">Loading...</h2>;
    if (error) return <h2 className="error-state">{error}</h2>;

  return (
    <div>
      <header>
        <h2 className="page-title">User-Dashboard</h2>
      </header>
      <div className="user-search">
        <input type="text" className="search-filter" placeholder="Search User" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      
      

      <div className="card-container">
        {searchUsers.map((user)=>
            <Card
             key={user.id}
             name={user.name}
             username={user.username} 
             email={user.email} 
             phone={user.phone} 
             company={user.company?.name}/>
        )}
      </div>
    </div>
  )
}

