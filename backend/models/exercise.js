const db = require("../db")
const {BadRequestError, NotFoundError} = require("../utils/errors")

class Exercise{ 
    // static async checkInput(sleepInfo) {
    //     const requiredFields = ["startDate", "startTime", "endDate", "endTime"]
    //     requiredFields.forEach((property) => {
    //       if (!sleepInfo.hasOwnProperty(property)) {
    //         throw new BadRequestError(`Missing ${property} in request body.`)
    //       }
    //     })}
  
      static async insertExercise({exerciseCard, user}){
        console.log("sleep item in insert" , exerciseCard)
        // Sleep.checkInput(sleepInfo)
        console.log("user", user)  
        const results = await db.query (`
              INSERT INTO exercise (name, category, duration, intensity, user_id)
              VALUES($1, $2, $3, $4,(SELECT id FROM users WHERE email = $5))
              RETURNING id,
                        name,
                        category,
                        duration,
                        intensity,
                        user_id,
                        created_at
                      `,
              [exerciseCard.name, exerciseCard.category, exerciseCard.duration, exerciseCard.intensity, user.email]
          ) 
          return results.rows[0]    
      }  
  
      static async listExercise(user){
        console.log("user id is: ", user)
        const results = await db.query(
          `SELECT *
           FROM exercise
           WHERE user_id = $1;
          `, [user.id]
          )
          return results.rows[0]
      }
}

module.exports = Exercise;