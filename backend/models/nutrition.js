const db = require("../db")
const {BadRequestError, NotFoundError} = require("../utils/errors")

class Nutrition{
    static async checkInput(nutritionBody) {
      const requiredFields = ["name", "category", "calories", "image_url"]
      requiredFields.forEach((property) => {
        if (!nutritionBody.hasOwnProperty(property)) {
          throw new BadRequestError(`Missing ${property} in request body.`)
        }
      })}

    static async insertNutrition({foodItem, user}){
      console.log("food item in insert" , foodItem)
      Nutrition.checkInput(foodItem)
      console.log("user", user)  
      const results = await db.query (`
            INSERT INTO nutrition (name, category, calories, image_url, user_id)
            VALUES($1, $2, $3, $4,(SELECT id FROM users WHERE email = $5))
            RETURNING id,
                      name,
                      category,
                      calories,
                      image_url,
                      user_id,
                      created_at
                    `,
            [foodItem.name, foodItem.category, foodItem.calories, foodItem.image_url, user.email]
        ) 
        return results.rows[0]    
    }  

    static async listNutrition(user){
      console.log("user id is: ", user)
      const results = await db.query(
        `SELECT *
         FROM nutrition
         WHERE user_id = $1;
        `, [user.id]
        )
        return results.rows[0]
    }
}

module.exports = Nutrition;
