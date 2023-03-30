import { pool } from "@/config/db";

/**Atrapo el metodo.*/
export async function handler(req,res){

    switch(req.method){
        case 'POST':
            console.log(res)
            return await saveAdress(req,res)
        case 'GET':
    }

}
/*Funcion agregar adress, no terminada.*/ 
 const saveAdress = async (req,res)=>{
    console.log("creating")
    const [result]  =await pool.query("INSERT INTO adresses SET ?",)
 }
 