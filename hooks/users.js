import axios from "axios";
import { useState, useEffect} from "react";
import { parse } from "cookie";

export function useUser() {

    const [user, setUser] = useState(null);
     
    async function fetchUser() {
        const user = await axios.get('/api/login/profile');
        setUser(user.data.username);
        console.log(user.data.username)
    }

    useEffect(() => {
        fetchUser()
    }, []);

    return user;
}

