require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./handlers/error');
const authRoutes = require('./routes/auth')

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api/auth', authRoutes)

app.use((req, res, next) => {
    let error = new Error("Not Found");
    error.status = 404;
    next(error)
});
app.use(errorHandler);

app.listen(3001, ()=> {console.log("Server has started on port 3001")})