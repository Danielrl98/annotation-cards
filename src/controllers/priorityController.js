const { request,response } = require('express')
const anotations = require('../models/AnotationData')

module.exports= {

   async read(request,response){

           const prioritys =  await request.query  
           
          const priorityNotes = await anotations.find(prioritys)

         
           return response.json(priorityNotes)
       
              
     }
}