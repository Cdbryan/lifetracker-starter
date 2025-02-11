const express = require('express')
const router = express.Router()
const nutrition = require("../models/nutrition")
const security = require("../middleware/security")
const userModel = require("../models/user")

//required fields array is in nutrition model 

router.post("/", security.requireAuthenticatedUser,  async (req,res,next) => {
    try{  
        const {user} = res.locals
        console.log("user in route", user)
        console.log(req.body)
        const nutriCard = await nutrition.insertNutrition({foodItem: req.body, user})
        return res.status(201).json({nutriCard})
    }
    catch(err){
        next(err)
    }
})

router.get("/", security.requireAuthenticatedUser, async(req,res,next) => {
    try{
        //same thing as post just call list nutrition 

        const {user} = res.locals
        console.log("req body in get/n", user)
        const userObj = await userModel.fetchUserByEmail(user.email)
        
        const nutritionInfo = await nutrition.listNutrition(userObj)
        return res.status(201).json({nutrition: nutritionInfo})
    }
    catch(err){
        next(err)
    }
})

//make router.get that calls list function 
    //handle errors, get user from res.locals, call data model

module.exports = router