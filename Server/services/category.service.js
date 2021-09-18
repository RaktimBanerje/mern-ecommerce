const slugify = require('slugify')
const categorySchema = require('../models/category.model')

const add = async (categoryObj, cb)=>{
    const category = new categorySchema({
        name: categoryObj.name, 
        slug: slugify(categoryObj.name),
    })
    if(categoryObj.parentId) category.parentId = categoryObj.parentId
    try{
        const newCategory = await category.save()
        cb(200, false, newCategory)
    } 
    catch(error){ cb(400, error)}
}

const getAll = async (cb)=>{
    try{
        let categories = await categorySchema.find()
        categories = arrangeCategories(categories)
        cb(200, false, categories)
    }
    catch(error) {cb(400, error)}
}

const arrangeCategories = (categories, parentId = null) => {
    const categoryList = []
    let category;
    if(parentId === null) category = categories.filter(category => category.parentId == undefined)
    else category = categories.filter(category => category.parentId == parentId )
    
    for(let cat of category){
        categoryList.push({
            _id: cat._id,
            name: cat.name,
            slug: cat.slug,
            children: arrangeCategories(categories, cat._id)
        })
    }
    return categoryList
}

module.exports = { add, getAll }