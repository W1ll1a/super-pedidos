import { pool } from "@/config/db";

export default async function handleCard (req, res) {
        switch(req.method){

            case 'POST ':
                return await saveCard (req,res)
            case 'GET':
                return await getCards(req,res)
            default: break
        }
}

const saveCard = async(req, res) =>{
    const {cardHolder,cardNumber,expirationMonth,expirationYear,cardVerificationCode} = req.body
    const [result] = await pool.query('INSERT INTO payments SET ?',{
        cardHolder,
        cardNumber,
        expirationMonth,
        expirationYear,
        cardVerificationCode
    }) 


    return res.status(200).json(result) 
}

const getCards = async(req,res)=>{
    const {username, idProducto} = req.body
}