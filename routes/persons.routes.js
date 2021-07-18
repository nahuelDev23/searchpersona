const { Router } = require('express')
const { search,add } = require('../controllers/search.controller')
const router = Router()

//TODO: middlewares para que solo el admi pueda manuputlar los user


router.get('/:id',search) 
router.post('/',add) 

module.exports = router