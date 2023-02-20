//Importation de Mongoose
const mongoose = require("mongoose")

//Importation de mongoose-unique-validator
const uniqueValidator = require('mongoose-unique-validator')

const UserSchema = mongoose.Schema({
    prenom:{
        type:String,
        required:true,
    },
    nom:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true,
    }
})
//Permet d'avoir une adresse mail unique dans la base de donnée
UserSchema.plugin(uniqueValidator)

const User = mongoose.model('User', UserSchema);
module.exports = User


