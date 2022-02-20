const express = require('express')
const app = express()
const routers = require('./routers')



require('./config/dbConfig')

app.get('/',function(req,res){
        
      res.send('teste')   
      console.log('okay')
           
})

app.use(express.json())
app.use(routers)
app.listen(3334,()=>{
    console.log('Node Conectado')
})