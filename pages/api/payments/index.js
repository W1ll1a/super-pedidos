import { pool } from "@/config/db";
import { Cagliostro } from "next/font/google";

export default async function handleCard (req, res) {
        switch(req.method){

            case 'POST':
                return await saveCard (req,res)
            case 'GET':
                return await getCards(req,res)
            default: break
        }
}

const saveCard = async(req, res) =>{
    try {
      console.log(req.body)
        const {
          cardHolder,
          cardNumber,
          expirationDate,
          cardVerificationCode,
          idUsuario,
        } = req.body;
          
        const query = 'INSERT INTO credit_cards (cardHolder, cardNumber, expirationDate, CVV, idUsuario) VALUES (?, ?, ?, ?, ?)';
        const params = [cardHolder, cardNumber, expirationDate, cardVerificationCode, idUsuario];
    
        const [result] = await pool.query(query, params);
    
        return res.status(200).json(result);
      } catch (error) {
        console.error('Error al guardar la tarjeta:', error);
        return res.status(500).json({ error: 'Error al guardar la tarjeta' });
      }
    };


    const getCards = async(req, res) =>{
          console.log("idUsuario enviado por usted",req.query.idUsuario)
          const {idUsuario} = req.query
          console.log(idUsuario)
          const [result] = await pool.query("SELECT * from credit_cards where idUsuario = ?", idUsuario)  
          console.log("este es es resultado que le envio", result)
          return res.status(200).json(result)

    }
