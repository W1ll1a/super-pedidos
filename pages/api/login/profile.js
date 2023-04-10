import { verify } from "jsonwebtoken";

export default function profileHandler (req,res){
    const {myTokenName} = req.cookies;
    if(!myTokenName){
        return res.status(401).json({error:"no existe"})
    }
    try {
        const user = verify(myTokenName, "secrete");
        return res.json({email:user.email, username:user.username, picture:user.picture})
    } catch (error) {
        
    }
}