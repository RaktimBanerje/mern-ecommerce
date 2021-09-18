const express = require('express')
const categoryService = require('../services/category.service')
const authMiddleware = require('../middleware/auth.middleware')
const router= express.Router()

router.use(authMiddleware.isLogin)

router.post('/add', (req, res)=>{
    if(req.body){
        categoryService.add(req.body, (status, err, data)=>{
            if(err) return res.status(status).json(err)
            else return res.status(status).json(data)
        })
    }
    else{
        res.status(400).json({err: 'Bad request'})
    }
})

router.get('/get', (req, res)=>{
    categoryService.getAll((status, err, categories)=>{
        if(err) return res.status(status).json(err)
        else return res.status(status).json(categories)
    })
})

module.exports = router
