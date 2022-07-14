const router = express.Router()
const nutrition = require("../models/nutrition")
const security = require("../middleware/security")

//required fields array is in nutrition model 

router.post("/nutrition", security.requireAuthenticatedUser,  async (req,res,next) => {
    try{
        const {user} = res.locals
        const nutriCard = await nutrition.makeNutritionCard({foodItem: req.body, user})
        return res.status(201).json({foodItem})
    }
    catch(err){
        next(err)
    }
})