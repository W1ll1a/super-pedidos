import axios from "axios";
import { useState, useEffect} from "react";
import { parse } from "cookie";

export function useUserPicture() {

    const [userPicture, setUserPicture] = useState(null);
     
    async function fetchUser() {
        const userProfilePic = await axios.get('/api/login/profile');
        setUserPicture(userProfilePic.data.picture);
        

    }

    useEffect(() => {
        fetchUser()
    }, []);

    return userPicture;
}

