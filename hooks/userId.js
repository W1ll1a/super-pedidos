import axios from "axios";
import { useState, useEffect} from "react";
import { parse } from "cookie";
import { useUser } from "./users";

export function useUserId() {
    const user = useUser()
    const [userId, setUserId] = useState(null);
     
    async function fetchUser(username) {
        const response = await axios.get(`/api/user/userApi?username=${username}`);
        return response.data

    }

    useEffect(() => {
        if (user) {
            fetchUser(user).then(userId => setUserId(userId));
        }
    }, [user]);


    return userId;
}
