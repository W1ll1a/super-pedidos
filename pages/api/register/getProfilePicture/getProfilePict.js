const getUser = async(req, res)=>{
    const userName = res.body
    const {result}= await pool.query("SELECT profilePicture FROM usuario WHERE userName= ?",userName)
    return res.status(200).json(result)
}