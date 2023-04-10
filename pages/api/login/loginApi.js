const jwt = require('jsonwebtoken');
import { pool } from "@/config/db"
import { serialize } from "cookie";

export default async function loginHandler(req,res){
    console.log("entre a handle login")
    try {
        const { email, password } = req.body;

        // Verificar que se proporcionaron el email y la contraseña
        if (!email || !password) {
            return res.status(400).json({ message: 'Falta el correo electrónico o la contraseña.' });
        }

        // Buscar el usuario correspondiente en la base de datos
        const [result]= await pool.query("SELECT * FROM usuario WHERE emailAdress = ?", email);
       
        // Verificar si se encontró un usuario con el correo electrónico dado
        if (result.length === 0) {
            return res.status(404).json({ message: 'No se encontró un usuario con el correo electrónico dado.' });
        }

        // Obtener el primer usuario encontrado
        const usuario = result[0];

        // Verificar si la contraseña es correcta
        if (usuario.password !== password) {
            return res.status(401).json({ message: 'La contraseña es incorrecta.' });
        }

        // Generar un token de autenticación
        const token = jwt.sign({
            exp:Math.floor(Date.now()/1000)+60*60*24*30,
            email:usuario.emailAdress,
            username: usuario.userName,
            picture: usuario.profilePicture
        },'secrete')

        // Serializar el token de autenticación como una cookie HTTP
        const serialized = serialize('myTokenName',token,{
            httpOnly:true,
            secure:process.env.NODE_ENV=== 'production',
            sameSite:'strict',
            maxAge:1000 *60*60*24*30,
            path:'/'
        })

        // Enviar la cookie HTTP con la respuesta
        res.setHeader('set-Cookie',serialized)

        // Enviar la respuesta de éxito
        return res.status(200).json({ message: 'Inicio de sesión exitoso.' });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Ocurrió un error al procesar la solicitud.' });
    }
}
