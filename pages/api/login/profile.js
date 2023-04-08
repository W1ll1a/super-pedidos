import { verify } from "jsonwebtoken";

export default function profileHandler (req,res){
    const {myTokenName} = req.cookies;
    if(!myTokenName){
        console.log('No hay token')
        return res.status(401).json({error:"no existe"})
    }
    try {
        console.log("Envie el token")
        const user = verify(myTokenName, "secrete");
        console.log(user)
        return res.json({email:user.email, username:user.username, picture:user.picture})
    } catch (error) {
        
    }
}