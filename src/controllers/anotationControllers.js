const { response } = require('express')
const anotations = require('../models/AnotationData')



module.exports ={

        async read(request,response){
          const anotationList = await anotations.find()
          return response.json(anotationList)
        },
 async create(request,response){
      
        const {title,notes,priority} = request.body
        const anotationCreated = await anotations.create(
            {
                title,
                notes,
                priority
            }
        )



        return request.body(anotationCreated)
        
    },
  async delete(request,response){
        const {id} = request.params
        const anotationDelete = await anotations.findOneAndDelete({
_id: id
        })
        if(anotationDelete){
            return response.json(anotationDelete)
        }else{
            return response.status(401).json({error: 'erro'})
    }

}
}