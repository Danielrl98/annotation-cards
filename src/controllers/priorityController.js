const { request,response } = require('express')
const anotations = require('../models/AnotationData')

module.exports= {

   async read(request,response){

           const prioritys =  await request.query  
           
          const priorityNotes = await anotations.find(prioritys)

         
           return response.json(priorityNotes)
       
              
     },
     async update(request,response){

     const {id} = await request.params 
        
     const prioritiesUpdate  = await anotations.findOne({
         _id: id

     })
     if(prioritiesUpdate.priority){
       prioritiesUpdate.priority = false
     } else{
        prioritiesUpdate.priority = true
     }
    await prioritiesUpdate.save()
    return response.json(prioritiesUpdate)

    }
}

  
