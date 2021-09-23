import React, { useEffect,useState } from 'react'
import { Formik, Form, Field, ErrorMessage, resetForm } from 'formik'
import * as Yup from 'yup'
import categoryApi from '../../Services/api/category.api'

import Navbar from '../Inc/Navbar'
import Menu from '../Inc/Menu'
import Footer from '../Inc/Footer'

const ListCategory = () => {
    const [ categories, setCategories ] = useState([])
    const [ fieldValues, setFieldValues] = useState({name: '', _id: ''})

    useEffect(()=>{
        categoryApi.getAll()
        .then(res => setCategories(res.data))
        .catch(() => console.log('Something went wrong!'))
    },[])

    const initialValues = { name:'', _id:'' }
    
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Required'),
        _id: Yup.string().required()
    })
    
    const onSubmit = async (values) => {
        categoryApi.edit(values)
            .then((res)=>{
                if(res.status === 200){
                    document.getElementsByName('reset')[0].click()
                    categoryApi.getAll()
                    .then(res => setCategories(res.data))
                    .catch(() => alert('Something went wrong!'))
                }
            })                            
            .catch(()=> alert('Something went wrong'))
    }

    const deleteCategory = async (values) => {
        categoryApi.delete(values)
            .then((res)=>{
                if(res.status === 200){
                    categoryApi.getAll()
                    .then(res => setCategories(res.data))
                    .catch(() => alert('Something went wrong!'))
                }
            })                            
            .catch(()=> alert('Something went wrong'))
    }
    
    return (
        <div id="page-top">

            <div id="wrapper">

                <Menu />

                <div id="content-wrapper" className="d-flex flex-column">
                    
                    <Navbar />
                    
                    <div id="content">
 
                        <div className="container-fluid">
                         
                            <h1 className="h3 mb-4 text-gray-800">List category</h1>
                            
                            <table className="table table-striped table-hover">
                                <thead className="thead-dark">
                                    <tr>                                   
                                        <th scope="col" className="text-center">Category</th>
                                        <th scope="col" className="text-center">Parent</th>
                                        <th scope="col" className="text-center">Action</th>                                    
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        categories.map(category => (
                                            <tr key={category._id}>
                                                <td className="text-center">{category.name}</td>
                                                <td className="text-center">{category.parentName}</td>
                                                <td className="text-center">
                                                    <div className="btn-toolbar justify-content-center" role="toolbar" aria-label="Toolbar with button groups">
                                                        <div className="btn-group mr-2" role="group" aria-label="First group">
                                                            <button 
                                                                type="button" 
                                                                className="btn btn-success" 
                                                                data-toggle="modal" 
                                                                data-target='#edit-category' 
                                                                data-_id={category._id} 
                                                                data-name={category.name} 
                                                                onClick={(e)=>{
                                                                    const {_id, name} = e.target.dataset
                                                                    setFieldValues({name, _id})
                                                                }}
                                                            >
                                                                Edit
                                                            </button>
                                                        </div>
                                                        <div className="btn-group mr-2" role="group" aria-label="Second group">
                                                            <button 
                                                            type="button" 
                                                            className="btn btn-danger" 
                                                            disabled={category.parentName == 'No Parent'}
                                                            data-_id={category._id}
                                                            onClick={(e)=> deleteCategory(e.target.dataset) }
                                                            >
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
        
                        </div>
 
                    </div>
                   
                    <Footer />

                </div>

            </div>
                    
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a>
            
            <div className="modal fade" id="edit-category" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <Formik 
                    initialValues={fieldValues || initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    enableReinitialize
                >
                    <div className="modal-content">
                        <Form>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Edit Category</label>
                                    <Field className="form-control" name="name" />
                                    <ErrorMessage className="d-block invalid-feedback" name="name" component="span" />
                                </div>
                                <Field name="_id" type="hidden" />                            
                            </div>

                            <div className="modal-footer">
                                <Field type="reset" className="btn btn-secondary" data-dismiss="modal" value="Close" name="reset"/>
                                <Field type="submit" className="btn btn-primary" value="Save changes" />
                            </div>
                        </Form>
                    </div>
                </Formik>
            </div>
            </div>    
        </div>
    )
}

export default ListCategory
