import { pool } from "@/config/db";

export default async function handleCard (req, res) {
        switch(req.method){

            case 'POST ':
                return await saveCard (res)
            case 'GET':
                return await getCards(res)
            default: break
        }
}

const saveCard = async(res) =>{

    const {cardHolder,cardNumber,expirationMonth,expirationYear,cardVerificationCode} = res.body
    const [result] = await pool.query('INSERT INTO payments SET ?',{
        cardHolder,
        cardNumber,
        expirationMonth,
        expirationYear,
        cardVerificationCode
    }) 

    return res.status(200).json(result) 
}