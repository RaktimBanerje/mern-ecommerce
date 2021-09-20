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
                parentName: parentName
            })
        })
        return categoryList
}
    
//     for(var i=0;i<categories.length; i++){
//         if(categories[i].parentId!=null){
//         var pnamearr=await categorySchema.findById(categories[i].parentId);
//         var pname=pnamearr.name;
//         }else{
//       var pname="No Parent";
//         }
//         categoryList.push({
//             _id: categories[i]._id,
//             name: categories[i].name,
//             slug: categories[i].slug,
//             parentname: pname
//         })
        
//     }
//     return categoryList
// }

// const arrangeCategories = (categories, parentId = null) => {
//     const categoryList = []
//     let category;
//     if(parentId === null) category = categories.filter(category => category.parentId == undefined)
//     else category = categories.filter(category => category.parentId == parentId )
    
//     for(let cat of category){
//         categoryList.push({
//             _id: cat._id,
//             name: cat.name,
//             slug: cat.slug,
//             children: arrangeCategories(categories, cat._id)
//         })
//     }
//     return categoryList
// }

module.exports = { add, getAll, getParent }