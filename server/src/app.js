// load in our modules
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config  = require('./config/config')

// express app
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// routes

app.post('/register', function(req, res){
    res.send(req.body);
})

app.get('/status', function(req, res){
    res.send({
        message: 'request sent to status page',
        user:{
            name: 'Jason',
            age: 23
        }
    })
})

sequelize.sync()
    .then(()=>{
        app.listen(config.port);
        console.log(`SERVER STARTED ON ${config.port}`);
    })
