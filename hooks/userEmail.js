import axios from "axios";
import { useState, useEffect} from "react";
import { parse } from "cookie";

export function useUserEmail() {

    const [userEmail, setUserEmail] = useState(null);
     
    async function fetchUser() {
        const userEmail = await axios.get('/api/login/profile');
        setUserEmail(userEmail.data.email);
        console.log(userEmail.data.email)

    }

    useEffect(() => {
        fetchUser()
    }, []);

    return userEmail;
}

