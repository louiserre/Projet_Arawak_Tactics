//Identification du user par son token
const jwt = require('jsonwebtoken');

//Importation du module dotenv
const dotenv = require("dotenv")


exports.authentification = (req,res,next) => {
    
    const token = req.headers?.authorization?.split(' ')[1] || req.query?.token//req.headers.authorization.split(' ')[1] || req.query.token //(req ? req.query.token : req.headers.authorization.split(' ')[1])
    
    const decoded = jwt.verify(token,`${process.env.JWT_KEY_TOKEN}`,(err,result) => {
        if (err) {
            
            return res.status(401).json({err:err})
               
        }
        //Stockage du result userId dans le request afin que les différentes routes puisse l'exploiter 
        req.userID = result.userId
        next()
    })
}


