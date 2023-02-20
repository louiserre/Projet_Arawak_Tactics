const express = require("express")
const router = express.Router();

//Importation du middleware password
const password = require("../middleware/password.js")

//Importation du middleware d'authentification
const authentification = require("../middleware/authentification.js")

//Importation du controllers user.js
const userController = require("../controllers/user.js")


// La Route signup 
router.post("/signup",password,userController.signup)

// La route login
router.post("/signin",userController.signin) // login


//Route readOne
router.get("/readOne",authentification.authentification,userController.readOneUser)

//Route update
router.put("/update/:id",authentification.authentification,userController.updateOneUser)

//Route delete
router.delete("/delete",authentification.authentification,userController.deleteOneUser)

//Exportation du module
module.exports = router








