const express = require('express')
const bodyParser = require("body-parser")
const fs = require('fs');

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))



app.get("/1", function(req, res){
    const fileContent = fs.readFileSync('./codes/1.txt', 'utf8');
    res.send(fileContent)
})

app.get("/2", function(req, res){
    const fileContent = fs.readFileSync('./codes/2.txt', 'utf8');
    res.send(fileContent)
})
app.get("/3", function(req, res){
    const fileContent = fs.readFileSync('./codes/3.txt', 'utf8');
    res.send(fileContent)
})
app.get("/4", function(req, res){
    const fileContent = fs.readFileSync('./codes/4.txt', 'utf8');
    res.send(fileContent)
})
app.get("/5", function(req, res){
    const fileContent = fs.readFileSync('./codes/5.txt', 'utf8');
    res.send(fileContent)
})

app.listen(process.env.PORT || 8000, ()=>{console.log("----------AppStarted-----------");})