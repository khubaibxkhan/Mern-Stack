import { useEffect , useState } from 'react'

const UserList = () => {
    const [ user , setUser ] = useState([]);
    const [ error , setError ] = useState(null);
    const [ loading , setLoading ] = useState(true);

    const API = "https://jsonplaceholder.typicode.com/users";

    const fetchUser = async() => {
        try {
            const res = await fetch(API);
            const data = await res.json();
        } catch (error) {
            
        }
    }
  return (
    <div>
      
    </div>
  )
}

export default UserList
