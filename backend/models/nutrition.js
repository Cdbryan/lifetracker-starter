const db = require("../db")
const {BadRequestError, NotFoundError} = require("../utils/errors")

class Nutrition{
    // static makeNutritionCard(foodItem, user){
    //     return{
    //         id: foodItem.id,
    //         name: foodItem.name,
    //         category: foodItem.category,
    //         calories: foodItem.calories,
    //         image_url: foodItem.image_url,
    //         user_id: foodItem.user_id,
    //         created_at: foodItem.created_at
    //     }
    // }

    static async insertNutrition(foodItem, user){
        const results = await db.query (`
            INSERT INTO nutrition (name, category, calories, image_url, user_id)
            VALUES($1, $2, $3, $4,(SELECT id FROM users WHERE email = $5))
            RETURNING id,
                      name,
                      category,
                      calories,
                      image_url,
                      user_id,
                      created_at,
                    `
            [foodItem.name, foodItem.category, foodItem.calories, foodItem.image_url, user.email]
        ) 
        const nutrition = results.rows[0]   
    }

    static async checkInput(nutritionBody) {
        const requiredFields = ["name", "category", "calories", "image_url"]
        requiredFields.forEach((property) => {
          if (!nutritionBody.hasOwnProperty(property)) {
            throw new BadRequestError(`Missing ${property} in request body.`)
          }
        })
    }
}
