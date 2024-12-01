const jwt = require ('jsonwebtoken');
require("dotenv").config();
const Authorize = (req,res,next)=>{
    
    const token = req.header('Authorization');
    if (!token && !(token.startsWith('Bearer ')) ){
        return res.status(401).send({message: 'Access denied. No token/invalid token provided.'});
    }
    
    try {
        const Bearer_Token = token.split(' ')[1];
        console.log(Bearer_Token);
        const decoded = jwt.verify(Bearer_Token,process.env.JWT_SECRET_KEY);
        req.Bearing_User = decoded;
        console.log(req.Bearing_User.name);
        next();
    }catch(err){
        res.status(403).send('Invalid token' + err.message)
        }
                    
};

module.exports = {Authorize};