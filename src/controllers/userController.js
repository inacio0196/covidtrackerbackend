const connection = require('../database/connection')
const cripto = require('crypto')




module.exports = {

  async getByID (req,res){
    const id_user = req.params.id_user
  
    const item = await connection('user')
    .select('*')
    .where('id', id_user)     
    
    return res.json(item)
    
 },
  async getPositionOnly (req,res){
     const register = await connection('users').select('position')
     return res.json(register) 
  },

  async update (req,res){
    const {name,whatsapp,city,email,state} = req.body
    const auth = req.headers.authorization
    
   const [id] = await connection('user')
   .select('id')
   .where('id', auth)
   
   if(id.id != auth){
     return res.json('not authorized')
  }  
    await connection('user').where('id', auth).update({
      name,
      whatsapp,
      city,
      email,
      state
    }).from('user')
    return res.json({
      name,
      whatsapp,
      city,
      email,
      state
    })
   
  },

  async create (req,res){
    const {name,whatsapp,city,email,state} = req.body
    const id = cripto.randomBytes(4).toString('HEX')
      
    //fazer validação de senha campos etc...

    //fazer chamada api google geocoding


     await connection('user').insert({
        id,
        name,
        whatsapp,
        city,
        email,
        state
     })

       return res.status(201).json({ 
        message:'have been registed with sucess',
        content:{
          id,
          name,
          whatsapp,
          city,
          email,
          state,
          
        }
      })
      
    },

  async delete (req,res){
     const auth = req.headers.authorization;

      
     const [id] = await connection('user')
     .select('id')
     .where('id', auth)
     
     
     if(id == undefined || id.id != auth){
        return res.json({message:'not authorized'}) 
     } 
     await connection('user')
     .where('id', auth)
     .del()
     return res.json({message:'register have been deleted'}) 
     
     
  }
  

}