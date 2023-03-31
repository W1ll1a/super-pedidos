const jwt = require('jsonwebtoken');
import { pool } from "@/config/db"
import { serialize } from "cookie";


export default async function loginHandler(req,res){
    console.log("entre a handle login")
    const { email, password } = req.body;
    const [result]= await pool.query("SELECT * FROM usuario WHERE emailAdress = ?", email)
    if(result.length>0){
        const usuario = result[0]
        console.log(usuario.password)
        if(usuario.password === password){
            console.log("puse un token")
            const token = jwt.sign({
                exp:Math.floor(Date.now()/1000)+60*60*24*30,
                email:{email},
                username: result.userName,
            },'secrete')
            const serialized = serialize('myTokenName',token,{
                httpOnly:true,
                secure:process.env.NODE_ENV=== 'production',
                sameSite:'strict',
                maxAge:1000 *60*60*24*30,
                path:'/'
            })
            res.setHeader('set-Cookie',serialized)
            return res.status(200).json('login succesfully'); 
        }
    }else{
        return res.status(500).json("No se encontro")
    }
}

