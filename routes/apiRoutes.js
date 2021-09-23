var db = require("../models");

module.exports = function(app) {

    // Used by api.js to get last workout
    app.get("/api/workouts", (req, res) => {
          db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    });


       // Creates a new workout

       app.post("/api/workouts", async (req, res)=> {
        try{
              const response = await db.Workout.create({type: "workout"})
            res.json(response);
        }
        catch(err){
            console.log("error occurred creating a workout: ", err)
        }
    })

       //Add exercise to a workout
       app.put("/api/workouts/:id", ({body, params}, res) => {

        
        // console.log(body, params)
        const workoutId = params.id;
        let savedExercises = [];
