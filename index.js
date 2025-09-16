//app create
const express = require('express');
const app = express();

//port find 
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware add
app.use(express.json());
const fileUpload = require('express-fileupload');
app.use(fileUpload());

//database connection
const db = require('./config/database');
db.connectDB();

//cloudinary connection
const cloudinary = require('./config/cloudinary');
cloudinary.cloudinaryConnect();

//api route mounting
const Upload = require("./routes/fileUpload");
app.use('/api/v1/upload', Upload);

//server create
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});