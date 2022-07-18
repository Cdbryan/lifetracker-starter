import * as React from "react";
import "./Activity.css";
import { useNavigate } from "react-router-dom";


export default function Activity({user}) {
  
  const navigate = useNavigate()
  //use an if statement to check if the user is null if so re route to the login page using navigate 
  React.useEffect(() => {console.log("user at this point is", user)}, [user])

  if(user == null)
  {
    navigate("/login")
  }

  return (
    <div className="ActivityContent">
      <h2 className="heading">Activity Feed</h2>
      <div className="activityButtons">
        <button className="activityButtonE ">Add Exercise</button>
        <button className="activityButtonS ">Log Sleep</button>
        <button className="activityButtonN ">Record Nutrition</button>
      </div>
      <div className="stats">
        <div className="main">
          <div className="exerciseSummary">
            <div className="background">
              <p>Total Exercise Minutes</p>
              <h1>0</h1>
              <svg
                height="100%"
                width="100%"
                viewBox="0 0 220 360"
                // style="position: absolute; left: -122px; bottom: -122px; right: 0px; transform: rotate(180deg); transform-origin: center center;"
              >
                <path
                  fill="rgba(255, 255, 255, 0.15)"
                  stroke="rgba(255, 255, 255, 0.15)"
                ></path>
              </svg>
            </div>
          </div>
          <div className="sleepSummary">
            <div className="background">
              <p>Avg Sleep Hours</p>
              <h1>0</h1>
              <svg
                height="100%"
                width="100%"
                viewBox="0 0 220 360"
                // style="position: absolute; left: -122px; bottom: -122px; right: 0px; transform: rotate(180deg); transform-origin: center center;"
              >
                <path
                  fill="rgba(255, 255, 255, 0.15)"
                  stroke="rgba(255, 255, 255, 0.15)"
                ></path>
              </svg>
            </div>
          </div>
          <div className="caloriesSummary">
            <div className="background">
              <p>Avg Daily Calories</p>
              <h1>1.00</h1>
              <svg
                height="100%"
                width="100%"
                viewBox="0 0 220 360"
                // style="position: absolute; left: -122px; bottom: -122px; right: 0px; transform: rotate(180deg); transform-origin: center center;"
              >
                <path
                  fill="rgba(255, 255, 255, 0.15)"
                  stroke="rgba(255, 255, 255, 0.15)"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <h4 className="heading2">More Stats</h4>
        <div className="more">
          <div className="caloriesSmall">
            <div className="background">
              <p>Maximum Hourly Calories</p>
              <h1>1</h1>
              <svg
                height="100%"
                width="100%"
                viewBox="0 0 220 360"
                // style="position: absolute; left: -122px; bottom: -122px; right: 0px; transform: rotate(180deg); transform-origin: center center;"
              >
                <path
                  fill="rgba(255, 255, 255, 0.15)"
                  stroke="rgba(255, 255, 255, 0.15)"
                ></path>
              </svg>
            </div>
          </div>
          <div className="exerciseSmall">
            <div className="background">
              <p>Avg Exercise Intensity</p>
              <h1>0</h1>
              <svg
                height="100%"
                width="100%"
                viewBox="0 0 220 360"
                // style="position: absolute; left: -122px; bottom: -122px; right: 0px; transform: rotate(180deg); transform-origin: center center;"
              >
                <path
                  fill="rgba(255, 255, 255, 0.15)"
                  stroke="rgba(255, 255, 255, 0.15)"
                ></path>
              </svg>
            </div>
          </div>
          <div className="sleepSmall">
            <div className="background">
              <p>Total Hours Slept</p>
              <h1>0</h1>
              <svg
                height="100%"
                width="100%"
                viewBox="0 0 220 360"
                // style="position: absolute; left: -122px; bottom: -122px; right: 0px; transform: rotate(180deg); transform-origin: center center;"
              >
                <path
                  fill="rgba(255, 255, 255, 0.15)"
                  stroke="rgba(255, 255, 255, 0.15)"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
