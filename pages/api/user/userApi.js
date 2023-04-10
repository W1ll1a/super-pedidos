import { pool } from "@/config/db";
import { Chela_One } from "next/font/google";

export default async function getUsuario(req, res) {
    try {
        const {username} = req.query;
        console.log(username)
        const usuario = await pool.query("SELECT idUsuario FROM usuario WHERE userName = ?", username);
        const idUsuario = usuario[0][0].idUsuario
        if (usuario.length > 0) {
            return res.status(200).json(idUsuario);
        } else {
            const error = new Error("Usuario no encontrado");
            error.statusCode = 404;
            throw error;
        }
    } catch (error) {
        console.error(error);
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
}

