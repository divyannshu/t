const express=require('express')
const routes=express.Router()
let {people}=require('../data')
routes.get('/',(req,res)=>{
    res.status(200).json({success:true,data:people})
})
routes.post('/',(req,res)=>{
    const {name}=req.body
    if(!name)
    {
        return res.status(400).json({success:false,msg:'please enter valid credentials'})
    }
    res.status(201).json({sucess:true,person:name})
})
routes.post('/postman',(req,res)=>{
    const {name}=req.body
    if(!name)
    {
        return res.status(400).json({success:false,msg:'please enter valid credentials'})
    }
    res.status(201).json({sucess:true,data:[...people,name]})
})
routes.put('/:id',(req,res)=>{
    const {id}=req.params
    const {name}=req.body
    const person=people.find((person)=> person.id===Number(id))
    if(!person)
    {
        return res.status(400).json({success:false,msg:`no person with ${id}`})
    }
    const newPeople=people.map((person)=>{
        if(person.id===Number(id)){
            person.name=name
        }
        return person
    })
    res.status(200).json({success:true,data:newPeople})

})  
routes.delete('/:id',(req,res)=>{
    const {id}=req.params
    const person=people.find((person)=> person.id===Number(id))
    if(!person)
    {
        return res.status(400).json({success:false,msg:`no person with ${id}`})
    }
    const newPeople=people.filter((person)=>person.id!==Number(id))
            
    res.status(200).json({success:true,data:newPeople})

})  
module.exports=routes