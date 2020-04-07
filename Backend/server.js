
const http = require("http");
const express = require('express')
const request = require('request')
const bodyParser = require('body-parser')
const path = require('path')


const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));
const server = http.createServer(app);
const port = process.env.PORT || 5000

app.use(express.static(__dirname + '/build'))


app.get('/covid-19/country/all', (req,res,next) =>{
    request.get('https://corona.lmao.ninja/all', (error,response,body) =>{
        res.send(body)
    })
})

app.post('/covid-19',(req,res,next) =>{

    const country = req.body.country1
    console.log(country)
    request.get(`https://corona.lmao.ninja/countries/${country}`, (error,response,body) =>{
        res.send(body)
    })

})


server.listen(port, ()=>{
    console.log("Server is listening...........")
})

