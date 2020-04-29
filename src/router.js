const express = require('express')
const userCtrl = require('./controllers/userController')

const sessionCtrl = require('./controllers/loginController')


/*
*
*/
const router = express.Router()

router.get('/user/', userCtrl.getPositionOnly)

//user
router.get('/user/:id_user', userCtrl.getByID)
router.put('/user/',userCtrl.update )
router.post('/user', userCtrl.create)
router.delete('/user/', userCtrl.delete)




//Login
router.post('/sessions', sessionCtrl.create)
module.exports = router
