const express = require("express");
const app= express(); 
const mongoose = require("mongoose");
const port = 3000;
const cors = require("cors");
const userRoute = require("./src/routes/user.js")

app.use(cors());
app.use(express.json());

app.use("/user",userRoute);



mongoose.connect("mongodb+srv://sandeep46621:w5tqFtSvAoG8T5v2@cluster0.dmocucf.mongodb.net/Todo-res", {
    useNewUrlParser: false,
    useUnifiedTopology: true,
    // Other options...
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
  