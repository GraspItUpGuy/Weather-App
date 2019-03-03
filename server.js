const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')


const  app = express()
const port  = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended : true}))
app.set(express.static(__dirname + './public'))
app.set('view engine', 'ejs')

app.get('/', (req,res)=>{
    res.render('index')
})

app.post('/', (req,res)=>{
    res.render('index')
    console.log(req.body.city)
})



app.listen(port, ()=>{
    console.log('server is running at http://localhost:3000')
})