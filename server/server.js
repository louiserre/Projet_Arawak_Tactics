//Importation de express
const express = require("express")

//Importation des routes
const userRoutes = require("./routes/user.js") 
 

//Iimportation de dotenv
require('dotenv').config({path:"./dotenv/.env"})

//Importation de la connexion mongoDb 
require("./db/dbConfig.js")

//Importation de cors
const cors = require('cors')


//variable d'environnement
const PORT = process.env.PORT || 3002


// Initialisation
const app = express()

// Permet d'utilser la méthode json
app.use(express.json())

// permet d'ajouter des en-têtes HTTP afin de permettre à un agent utilisateur d'accéder à des ressources d'un serveur
app.use(cors())

// La Route d'authentification
app.use("/api/authentification",userRoutes)

app.listen(PORT, () => console.log(`The server is launched on the port ${PORT}`))


