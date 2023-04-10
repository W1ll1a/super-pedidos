import axios from "axios";
import { useState, useEffect} from "react";
import { parse } from "cookie";

export function useUserEmail() {

    const [userEmail, setUserEmail] = useState(null);
     
    async function fetchUser() {
        const response = await axios.get('/api/login/profile');
        return response.data.email;
    }

    useEffect(() => {
        fetchUser().then(email => setUserEmail(email));
    }, []);

    return userEmail;
}

