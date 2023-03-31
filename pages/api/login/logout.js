import { verify } from "jsonwebtoken"
import { serialize } from "cookie"

export default function logOutHandler(req,res){
    const {myTokenName} = req.cookies
    if(!myTokenName){
        return res.status(404).json({error:"No existe el token"})
    }
    try{
        verify(myTokenName,'secrete')
        const serialized = serialize('myTokenName', null,{
            httpOnly:true,
            secure:true,
            sameSite:true,
            maxAge:0,
            path:"/"
        })
        res.setHeader('Set-Cookie', serialized)
        return res.status(200).json("Succesfully")
    }catch(error){
        return res.status(401).json({error:"invalid token"})
    }
}