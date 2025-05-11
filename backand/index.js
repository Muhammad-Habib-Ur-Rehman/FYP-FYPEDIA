const bodyParser = require("body-parser");
const express=require("express");
const app=express();
const cors = require('cors');
require("dotenv").config();
require('./Models/db')
const AuthRouter=require("./Routes/AuthRouter");

const PORT=process.env.PORT || 8080

app.use(bodyParser.json());
app.use(cors());

app.use('/auth',AuthRouter);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`App is listening on http://0.0.0.0:${PORT}`);
  });
  