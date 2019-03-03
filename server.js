const express = require('express')



const  app = express()
const port  = process.env.PORT || 3000


app.get('/', (req,res)=>{
    res.send('this is the home page fellas')
})

app.listen(port, ()=>{
    console.log('server is running at http://localhost:3000')
})