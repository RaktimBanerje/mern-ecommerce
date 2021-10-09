import React, { useEffect, useContext } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import categoryApi from '../../Services/api/category.api'

import Navbar from '../Inc/Navbar'
import Menu from '../Inc/Menu'
import Footer from '../Inc/Footer'

import { UserContext } from '../../App'

const AddCategory = () => {

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

    useEffect(()=>{
        refreshCategoryList()
    }, [])

      
    const initialValues = {
        name: '', 
        parentId: ''
    }

    const onSubmit = async (values)=>{
        try{
            const res = await categoryApi.add(values)
            if(res.status === 200){
                refreshCategoryList()
            }

        }
        catch(error){ console.log(error) }
    }

    return (
        <div id="page-top">

            <div id="wrapper">

                <Menu />

                <div id="content-wrapper" className="d-flex flex-column">
                    
                    <Navbar />
                    
                    <div id="content">
 
                        <div className="container-fluid">
                         
                            <h1 className="h3 mb-4 text-gray-800">Add category</h1>

                            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                                <Form>
                                    <p>Parent</p>
                                    <p>
                                        <Field as="select" name="parentId" className="form-control form-control-user">
                                            <option value="">-No Parent-</option>
                                            {state.parentCategories.map((category)=>
                                               <option value={category._id} key={category._id}>{category.name}</option>
                                            )}
                                        </Field>
                                    </p>
                                    <p>Category name</p>
                                    <p>
                                        <Field type="text" name="name" className="form-control form-control-user" /> 
                                        <ErrorMessage className="d-block invalid-feedback" name="name" component="span" />
                                    </p>
                                    <p>
                                        <Field type="submit" name="submit" value="Save" className="btn btn-primary" />
                                    </p>
                                </Form>
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

export default AddCategory
