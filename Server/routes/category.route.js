const express = require('express')
const categoryService = require('../services/category.service')
const router= express.Router()

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

router.get('/get-parent', (req, res)=>{
    categoryService.getParent((status, err, categories)=>{
        if(err) return res.status(status).json(err)
        else return res.status(status).json(categories)
    })
})

router.get('/get-child-parent', (req, res)=>{
    categoryService.getChildParent((status, err, categories)=>{
        if(err) return res.status(status).json(err)
        else return res.status(status).json(categories)
    })
})

router.post('/edit', (req, res)=>{
    categoryService.edit(req.body, (status, err, category)=>{
        if(err) return res.status(status).json(err)
        else return res.status(status).json(category)
    })
})

router.post('/delete', (req, res)=>{
    categoryService.remove(req.body, (status, err)=>{
        if(err) return res.status(status).json(err)
        else return res.status(status).send()
    })
})

module.exports = router
