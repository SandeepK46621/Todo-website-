const express = require("express");
const app= express(); 
const mongoose = require("mongoose");
const port = 3000;
const cors = require("cors");
const userRoute = require("./src/routes/user.js")

app.use(cors());
app.use(express.json());

app.use("/user",userRoute);

// use your mongoose url

mongoose.connect("", {
    useNewUrlParser: false,
    useUnifiedTopology: true,
    // Other options...
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
  
