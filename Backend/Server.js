const express = require('express');
const app = express();
const CORS = require('cors');
const bodyp = require('body-parser');
const PORT = 9000;
const mongoose = require("mongoose");
const Users = require('./Models/Users');

app.use(express.json());
app.use(bodyp.urlencoded({ extended: true }));
app.use(CORS());

mongoose.connect("mongodb://127.0.0.1:27017/NEVER_SELECTED");

app.get("/", (req, res) => {
    res.send("Server is on");
})

app.post("/addUsers", async (req, res) => {
    let user = new Users({ company: req.body.companyname, job_tilte: req.body.jobtile, email: req.body.email, salary: req.body.salary });
    let result = await user.save();
    res.send(result);
})

app.listen(PORT, () => {
    console.log("Server is Running..");
})