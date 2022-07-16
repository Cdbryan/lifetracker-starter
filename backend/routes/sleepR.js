const express = require('express')
const router = express.Router()
const sleep = require("../models/sleep")
const security = require("../middleware/security")
const userModel = require("../models/user")

router.post("/", security.requireAuthenticatedUser,  async (req,res,next) => {
    try{  
        const {user} = res.locals
        console.log("user in route", user)
        console.log("whats in sleep post reqest body", req.body)
        const sleepCard = await sleep.insertSleep({sleepCard: req.body, user})
        return res.status(201).json({sleepCard})
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
        
        const sleepInfo = await sleep.listSleep(userObj)
        return res.status(201).json({sleep: sleepInfo})
    }
    catch(err){
        next(err)
    }
})

module.exports = router