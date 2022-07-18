import * as React from 'react';
import NutritionCard from '../NutritionCard/NutritionCard';
import "./Nutrition.css"

export default function(){
    if(user == null)
    {
      navigate("/login")
    }
    else{
      console.log("user at this point is", user)
    }
    
    return(
        <div className='NutritionPage'>
            <h1> hey this is the nutrition page </h1>
            <NutritionCard></NutritionCard>
            <div className="empty"> 
                <h2>Nothing here yet.</h2>
            </div>
        </div>

    )
}