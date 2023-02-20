//Identification du user par son token
const jwt = require('jsonwebtoken');

//Importation du module dotenv
const dotenv = require("dotenv")


exports.authentification = (req,res,next) => {
    //console.log(req);
    console.log("--->Contenu de la req.body");
    console.log(req.body);
    console.log("--->Contenu req.header authorization");
    console.log(req.headers.authorization);
    console.log("--->Contenu req.query");
    console.log(req.query);
    console.log("--->Contenu req.params");
    console.log(req.params);
    //console.log(req.query);
   
    const token = req.headers?.authorization?.split(' ')[1] || req.query?.token//req.headers.authorization.split(' ')[1] || req.query.token //(req ? req.query.token : req.headers.authorization.split(' ')[1])
    console.log("--->Contenu du token ");
    console.log(token);
    const decoded = jwt.verify(token,`${process.env.JWT_KEY_TOKEN}`,(err,result) => {
        if (err) {
            console.log(err);
            //console.log(req.result = result.userId); 
            return res.status(401).json({err:err})
               
        }
        //Stockage du result userId dans le request afin que les différentes routes puisse l'exploiter 
        req.userID = result.userId
        next()
    })
}


