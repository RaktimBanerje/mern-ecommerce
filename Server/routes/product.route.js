const express = require('express')
const path = require('path')
const multer = require('multer')
const router = express.Router()

const authMiddleware = require('../middleware/auth.middleware')
const productService = require('../services/product.service')

/* 
* check weather user is authenticate or not 
*/
router.use(authMiddleware.isLogin)

/* 
* multer configuration
*/
const upload = multer({
    storage: multer.diskStorage({
        destination: './public/product-image/', 
        filename: function (req, file, cb){
            cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname))
        }
    })
})

/* 
*  add a new product   
*/
router.post('/add', upload.single('photo'), async (req, res, next)=>{
    productService.add(req, async(status, error, product)=>{
        if(error)
            res.status(status).json(error)
        else
            res.status(200).json(product)
    })
})

router.get('/get', async (req, res, next)=>{
    productService.get(null, async (status, error, product)=>{
        if(error)
            res.status(status).json(error)
        else
            res.status(200).json(product)       
    })
})

router.get('/get/:id', async (req, res, next)=>{
    
    const productId = req.params['id']
    
    productService.get(productId, async (status, error, product)=>{
        if(error)
            res.status(status).json(error)
        else
            res.status(200).json(product)  
    })
})

router.get('/delete/:id', async (req, res, next)=>{
    
    const productId = req.params['id']

    productService.remove(productId, async (status, error, product)=>{
        if(error)
            res.status(status).json(error)
        else
            res.status(200).json(product)  
    })
})

module.exports = router