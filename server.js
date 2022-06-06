//backend web framework for building web apps in JS

const express = require("express");

const logger = require('./middlewares/logger')
const sessions = require('./middlewares/sessions')

const somethingController = require('./controllers/somethings_controller')
const usersController = require('./controllers/users_controller')
const sessionsController = require('./controllers/sessions_controller')


//create app object

const app = express();
const port = 3000;

//start the server
app.listen(port, () => console.log(`listening to port ${port}`));

app.use(logger)

//This is going to be our mini router for static files- this is our SPA
//before it goes to the other routes, it goes to the client page and checks
app.use(express.static("client"));

//parse json body in a POST, PUT or DELETE request, and it assigns the data to req.body
app.use(express.json());

app.use(sessions)


app.use('/api/somethings', somethingsController)
app.use('/api/users', usersController)
app.use('/api/sessions', sessionsController)
