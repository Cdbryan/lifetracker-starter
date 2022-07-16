const db = require("../db")
const {BadRequestError, NotFoundError} = require("../utils/errors")

class Sleep{ 
    // static async checkInput(sleepInfo) {
    //     const requiredFields = ["startDate", "startTime", "endDate", "endTime"]
    //     requiredFields.forEach((property) => {
    //       if (!sleepInfo.hasOwnProperty(property)) {
    //         throw new BadRequestError(`Missing ${property} in request body.`)
    //       }
    //     })}
  
      static async insertSleep({sleepCard, user}){
        console.log("sleep item in insert" , sleepCard)
        // Sleep.checkInput(sleepInfo)
        console.log("user", user)  
        const results = await db.query (`
              INSERT INTO sleep (startDate, startTime, endDate, endTime, user_id)
              VALUES($1, $2, $3, $4,(SELECT id FROM users WHERE email = $5))
              RETURNING id,
                        startDate,
                        startTime,
                        endDate,
                        endTime,
                        user_id,
                        created_at
                      `,
              [sleepCard.startDate, sleepCard.startTime, sleepCard.endDate, sleepCard.endTime, user.email]
          ) 
          return results.rows[0]    
      }  
  
      static async listSleep(user){
        console.log("user id is: ", user)
        const results = await db.query(
          `SELECT *
           FROM sleep
           WHERE user_id = $1;
          `, [user.id]
          )
          return results.rows[0]
      }
}

module.exports = Sleep;
