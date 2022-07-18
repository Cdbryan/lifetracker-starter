import * as React from "react";
import "./Exercise.css";
import { useNavigate } from "react-router-dom";

export default function Exercise(){
    if(user == null)
    {
      navigate("/login")
    }
    else{
      console.log("user at this point is", user)
    }

    return(
        <div className="ExercisePage"> </div>
    )
}