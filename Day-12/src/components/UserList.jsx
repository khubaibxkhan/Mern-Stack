import { useEffect , useState } from 'react'

export const UserList = () => {
    const [ user , setUser ] = useState([]);
    const [ error , setError ] = useState(null);
    const [ loading , setLoading ] = useState(true);

    const API = "https://jsonplaceholder.typicode.com/users";

    const fetchUser = async() => {
        try {
            const res = await fetch(API);

            if (!res.ok) {
                throw new Error("Failed to fetch users");
                    }

            const data = await res.json();
            console.log(data);
            setUser(data);

        } 
            catch (err) {
                setError(err.message)
        }

            finally{
                setLoading(false);
        }
    }

    useEffect(() => {
        fetchUser();
    }, []);

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>{error}</h2>;

    
  return (
    <div>
      <h2>User List</h2>
      {user.map((users) => (
            <div key={users.id}>
                <p><strong>{users.name}</strong></p>
                <p>{users.email}</p>
                <hr />
                </div>
            ))}
    </div>
  )
}

