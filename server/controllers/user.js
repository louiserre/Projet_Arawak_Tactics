const bcrypt = require('bcrypt'); // Importation de bcrypt pour crypté les mots de passe
const User = require("../models/user.js")//Importation du model User
require('dotenv').config()// Importation pour l'utilisation des variables d'environnements
const jwt = require('jsonwebtoken');//permet d'identifier un user par son token

// signup permet d'enregistrer le nouvel utilisateur dans la bade de donnée
 exports.signup = (req,res,next) => {
    //Récupérer l'email avant de l'envoyer dans la base de donnée
    const email = req.body.email
    

    //hasher le mot de passe avant de l'envoyer dans la base de donnée
    bcrypt.hash(req.body.password, 10)
    .then((hash) => {
        
        //ce qui va etre enregistrer dans MongoDb
        const user =  new User({
            prenom:req.body.prenom,
            nom:req.body.nom,
            email:email,
            password:hash
        })
        
                
        //Envoyer le user dans la base de donnée MongoDB
         user.save()
        .then(() => res.status(201).json({message:"utilisateur crée et sauvegarder"}).send(console.log("utilisateur crée")))// a la place du send ou peut mettre le json (vidéo 146)
        .catch((err) => res.status(500).json({error:err}).send(console.log(err)))

    })
    .catch((err) => res.status(500).json({error:err}).send(console.log(err)))

   
};




// signin pour s'authentifier

exports.signin = (req,res,next) => { // controle et clique droit souris
    //console.log("LOG sigin");
    //console.log(req.body);
   
    //Récupérer l'email 
    const email = req.body.email
    

    //Chercher dans la base de donnée si l'utilisateur est bien présent
    User.findOne({email:email})
    .then((user) => { 
        //console.log("--->Contenu: user");
        //console.log(user);

        //si le mail de l'user n'est pas présent, ou  n'existe pas
        if(!user){
            return res.status(500).json({err:`l'email est incorrect`})   
        }

        //Controler la validité du password envoyer par le front (controler si le password correspond au password de l'user)
         bcrypt.compare(req.body.password,user.password)// le user.password pour avoir que le mot de passe, ne passe que dans une promesse
        .then((controlPassword) => {

            //console.log("--->controlPassword");
            //console.log(controlPassword)// retourne true si le password est identique a celui de l'utilisateur ou sinon false si le mot de passe n'est pas correct

            //si le mot de passe est incorrect
            if(!controlPassword){
                return res.status(500).json({err:"le mot de passe est incorrect"})
            }


            //Si le mot de passe est correct
            //envoi la response du serveur du userId et du token d'authentification
            //encodage de userId pour la création de nouveau objet 
            res.status(201).json({
                token: jwt.sign( 
                    {userId: user._id},
                    `${process.env.JWT_KEY_TOKEN}`,
                    {expiresIn:process.env.JWT_DURING}//"30days", 60 * 1 = 1minutes, "1minutes" //process.env.JWT_DURING // 1hours
                )
            })
        })
        .catch((err) => {
            res.status(500).json({error:err})
            console.log(err);
        })



    })
    .catch((err) => {
        res.status(500).json({error:err})
        console.log(err);
    });

    
};



////////////////////////
exports.readOneUser = (req,res,next) => {//readOneFicheUser
    console.log("--->log du controllers readOneFicheUser");
    console.log(req.userID);
    const userId = req.userID
    //console.log("---> readOneFicheUser");
    //console.log(req.query.userId);
        
    //console.log(req.params.id);
    
    User.findOne({_id:userId})
    .then((objet) => {
        console.log("--->Contenu de l'objet depuis le model User");
        console.log(objet)
        res.status(201).json({message:objet})
    })
    .catch((err) => console.log(err))
}


exports.updateOneUser = (req,res,next) => {//updateOneFicheUser
    //console.log(req.body);
    console.log("--->Contenu de la req.body du middleware updateOneFicheUser");
    console.log(req.params);
    
    
        
    //console.log("--->contenu: de la req.params.id du middleware updateOneFicheUser");
     //console.log(req.params.id);
    
     //modification qui seront renvoyer dans la base de donnée
     User.updateOne({_id:req.params.id},{...req.body.user})
     .then(() => {
        res.status(200).json({message:"l'objet a été mise à jour"})
    })
     .catch((err) => {
        res.status(400).json({err})
    })
}

exports.deleteOneUser = (req,res,next) => {//deleteOneFicheUser
    console.log(req);
    User.deleteOne({_id:req.query.id})
    .then((response) => {
        console.log("--->Contenu: crotrollers delete");
        console.log(response)
        res.status(201).json({message:"l'objet a été supprimé"})
    })
    .catch((err) => {
        res.status(400).json({err:err})
        console.log(err);
    }) 
}






