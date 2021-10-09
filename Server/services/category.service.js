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

const getParent = async (cb)=>{
    try{
        let categories = await categorySchema.find({parentId: null})
        cb(200, false, categories)
    }
    catch(error) {cb(400, error)}
}

const getChildParent = async (cb)=>{
    try{
        
        let categories = await categorySchema.find()
        categories = arrangeAsChildParent(categories)
        cb(200, false, categories)
    }
    catch(error) {cb(400, error)}
}


const edit = async (category, cb)=>{
    try{
        let newCategory = await categorySchema.findByIdAndUpdate({_id: category._id}, {
            name: category.name, 
            slug: slugify(category.name),
            parentId: category.parentId
        }, { new: true } )
        cb(200, false, newCategory)
    }
    catch(error) {cb(400, error)}
}

const remove = async (category, cb)=>{
    try{
        let result = await categorySchema.findOneAndDelete({_id: category._id, parentId: /.*/})
        if(result) 
            cb(200, false)
        else
           throw new Error('Bad request')
    }
    catch(error) {cb(400, error)}
}

const arrangeCategories = (categories) => {
        const categoryList = []
        categories.forEach((category)=>{
            let parentName = 'No Parent'
            if(category.parentId){
                const parentCategory = categories.find((cat)=> cat._id == category.parentId)
                parentName = parentCategory.name
            }
            categoryList.push({
                _id: category._id,
                name: category.name,
                slug: category.slug,
                parentName: parentName,
                parentId: category.parentId
            })
        })
        return categoryList
} 

const arrangeAsChildParent = (categories, parentId = null)=>{
    const categoryList = []
    let category;
    if(parentId == null)
        category = categories.filter(cat => cat.parentId == undefined)
    else 
        category = categories.filter(cat => cat.parentId == parentId)
    
    for(let cate of category){
        categoryList.push({
            _id: cate._id,
            name: cate.name,
            slug: cate.slug,
            children: arrangeAsChildParent(categories, cate._id)
    
        })
    }
    return categoryList
}

module.exports = { add, getAll, getChildParent, getParent, edit, remove }