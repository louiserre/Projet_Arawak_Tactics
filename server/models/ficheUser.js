//Importation de Mongoose
const mongoose = require("mongoose")

//le modèle : donnée utilisateur pour la page du frontend
const FicheUserSchema = mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    nom:{
        type:String,
        required:true,
    },
    prenom:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    }

   
})

const FicheUser = mongoose.model('FicheUser', FicheUserSchema);
module.exports = FicheUser