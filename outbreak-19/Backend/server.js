const express = require('express')
const request = require('request')
const bodyParser = require('body-parser')


const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));
const port = process.env.PORT || 3002

app.get('/covid-19/country', (req,res,next) =>{
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


app.listen(port, ()=>{
    console.log("Server is listening...........3002")
})

