import React, { useEffect, useContext } from 'react'
import { Formik, Form, Field, ErrorMessage} from 'formik'

import categoryApi from '../../Services/api/category.api'
import productApi from '../../Services/api/product.api'

import Navbar from '../Inc/Navbar'
import Menu from '../Inc/Menu'
import Footer from '../Inc/Footer'
import FieldControl from '../FormComponent/FieldControl'

import { UserContext } from '../../App'

const AddProduct = () => {

    const { state, setState } = useContext(UserContext)

    const refreshCategoryList = ()=>{
        categoryApi.refreshCategoryList()
        .then(result => {
            setState({
                ...state,
                categories: result[0].data,
                parentCategories: result[1].data,
                parentChildCategories: result[2].data
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        refreshCategoryList()
    }, [])

    const initialValues = { 
        categoryId: '',
        title: '',
        description: '',
        marketPrice: '',
        sellingPrice: '',
        lunch: '',
        keyword: '',
        metaTitle: '',
        metaDescription: '',
    }

    const onSubmit = async (values) => {
        const form = new FormData

        for(const [key, value] of Object.entries(values))
            form.append(key, value)

        try{
            const res = await productApi.add(form)
            if(res.status === 200){
                alert('New product is added')
            }
        }
        catch(error){ 
            alert('Something went wrong')
        }
    }

    return (
        <div id="page-top">

            <div id="wrapper">

                <Menu />

                <div id="content-wrapper" className="d-flex flex-column">
                            
                    <div id="content">

                        <Navbar />

                        <div className="container-fluid">
                         
                            <h1 className="h3 mb-4 text-gray-800">Add Product</h1>

                            <Formik
                                initialValues={initialValues}
                                onSubmit={onSubmit}
                            >
                                {
                                    (formik) => <Form>
                                        <Field as="select" id="categoryId" name="categoryId" className="form-control">
                                            {
                                                <React.Fragment>    
                                                <option value="">--Select--</option>
                                                {
                                                    state.parentChildCategories.map(parentCategory => (
                                                        <optgroup label={parentCategory.name} key={parentCategory._id}>
                                                            {
                                                                parentCategory.children.map(childCategory => (
                                                                    <option value={childCategory._id} key={childCategory._id}>{childCategory.name}</option>
                                                                ))
                                                            }
                                                        </optgroup>
                                                    ))
                                                }                                                    
                                               </React.Fragment>
                                            }
                                        </Field>

                                        <FieldControl control="input" name="name" label="Name" />
                                        <FieldControl control="input" name="title" label="Title" />
                                        <FieldControl control="textarea" name="description" label="Description" />
                                        <FieldControl control="input" name="marketPrice" label="Market Price" />
                                        <FieldControl control="input" name="sellingPrice" label="Selling Price" />
                                        <FieldControl control="input" name="metaTitle" label="Meta Title" />
                                        <FieldControl control="input" name="metaDescription" label="Meta Description" />
                                        <FieldControl control="file" name="photo" label="Photo" />
                                        
                                        <input className="btn btn-lg btn-success" type="submit" name="submit" value="Save"/>
                                    </Form>
                                }
                            </Formik>
                                                        
                        </div>
 
                    </div>

                    <Footer />

                </div>
        
            </div>
                    
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a>
            
        </div>
    )
}

export default AddProduct
