const express = require('express');
const https = require('https');
const app = express();


app.get("/",(req,res)=>{
    res.send("Hello There")
})

app.listen(3000,function(){
    console.log('listening on port 3000...')
})