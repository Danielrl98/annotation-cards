const { request } = require('express')
const annotation = require('../models/AnotationData')

module.exports = {

    async update(request,response){

         const {id} = request.params
         const {notes} = request.body

        const contentUpdate = await annotation.findOne({
            _id: id
        })
        if(notes){
            contentUpdate.notes = notes
            await contentUpdate.save()
        }
        return response.json(contentUpdate)
       


    }
}