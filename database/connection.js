const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path:"./.env"});

//10X1234-password
mongoose.set('strictQuery', true);

mongoose.connect(process.env.URL)
.then(()=>{console.log("Connected Sucssesfully")})
.catch(()=>{console.log("Connection failed")});


