import express from "express";
import mongoose from "mongoose";

let app = express();
// establish connection
mongoose.connect("mongodb+srv://sample:sample@learning.cavmn17.mongodb.net/", {
    dbName: "learning"
}).then(() => console.log(`Connected to MongoDB`)).catch((error) => console.log(`Error: ${error}`))

// user Routes
// @api dsc -> register
//@api method -> post
//@api endpoint -> /api/user/register
 
app.post('/api/user/register', (req, res) => {

})



let port = 1000;

app.listen(port, () => console.log(`Port is Running on ${port}`))


