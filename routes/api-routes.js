const db = require("../models");

module.exports = function (app) {
     app.get("/api/workouts", (req, res) => {
          db.Workout.find({})
          .then(dbInfo => {
               res.json(dbInfo);
          })
          .catch(err => {
               res.json(err);
          });
     });
   
     app.post("/api/workouts", (req, res) => {
          db.Workout.create(req.body)
          .then(dbInfo => {
               res.json(dbInfo);
          })
          .catch(err => {
               res.json(err);
          });
     });
   
     app.put("/api/workouts/:id", ({body}, res) => {
          db.Workout.update({_id:req.params.id},{$push:{exercises:body}})
          .then(dbInfo => {
               res.json(dbInfo);
          })
          .catch(err => {
               res.json(err);
          });
     });
   
     app.get("/api/workouts/range", (req, res) => {
          db.Workout.find()
          .then(dbInfo=>{
               res.json(dbInfo);
          })
          .catch(err=>{
               res.json(err);
          });
     });
}