app.get("/api/workous", (req, res) => {
     db.Workout.find({})
     .then(dbNote => {
          res.json(dbNote);
     })
     .catch(err => {
          res.json(err);
     });
});
   
app.get("/user", (req, res) => {
     db.User.find({})
     .then(dbUser => {
          res.json(dbUser);
     })
     .catch(err => {
          res.json(err);
     });
});
   
app.post("/submit", ({ body }, res) => {
     db.Note.create(body)
     .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))
     .then(dbUser => {
          res.json(dbUser);
     })
     .catch(err => {
          res.json(err);
     });
});
   
app.get("/populateduser", (req, res) => {
     // TODO
     // =====
     // Write the query to grab the documents from the User collection,
     // and populate them with any associated Notes.
     // TIP: Check the models out to see how the Notes refers to the User
});
   
app.get("/populateduser", (req, res)=>{
     db.User.find({}).populate("notes").then(dbUser=>{
          res.json(dbUser);
     }).catch(err=>{
          if (err) throw err;
     })
});