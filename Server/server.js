require('dotenv').config()
const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const dbConfig = require('./database/db')

const authRoutes = require('./routes/auth.route')
const productRoutes = require('./routes/product.route')
const categoryRoutes = require('./routes/category.route')
const cartRoutes = require('./routes/cart.route')

const app = express()

mongoose.connect(dbConfig.db, {
    'useNewUrlParser': true, 
    'useUnifiedTopology': true
})
.then(()=>{console.log('Database sucessfully connected')})
.catch((error)=>{console.log(`Database connection failed: \n ${error}`)})

app.use(cors({ origin: true, credentials: true }))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/assets', express.static('public'))


app.use('/api/auth', authRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/product', productRoutes)
app.use('/api/cart', cartRoutes)

app.listen(8080, ()=>{
    console.log('App is running on PORT 8080');
})