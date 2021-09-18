import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import auth from '../../Services/api/auth.api'
import { Link, Redirect } from 'react-router-dom'

const Register = () => {
    const initialValues = {
        first_name: 'Raktim',
        last_name: 'Banerjee',
        email: 'raktimbanerjee9@gmail.com',
        password: 'Raktim365249',
        confirm_password: 'Raktim365249'
    }
    
    const validationSchema = Yup.object().shape({
        first_name: Yup.string()
            .required('Required'),
        last_name: Yup.string()
            .required('Required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        password: Yup.string()
            .min(6, 'Password can\'t be shorter than 6 charecters')
            .max(22, 'Password can\'t br longer than 22 charecters')
            .required('Required'),
        confirm_password: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords doesn\'t match')
            .required('Required')
    })
    
    const onSubmit = async (values) => {
        try{
            const res = await auth.register(values)
            if(res.status === 200)
                alert(res.data.message)
        }
        catch(err){
            if(err.response.status === 409){
                alert(err.response.data.message)               
            }
            else
                alert('Something went wrong')
        }
    }
    
    document.body.classList.add('bg-gradient-primary')
   
    return (
        <div className="container">
            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">                    
                    <div className="row">
                    <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                        <div className="col-lg-7">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                </div>
                                <Formik 
                                    initialValues={initialValues} 
                                    validationSchema={validationSchema} 
                                    onSubmit={onSubmit}
                                > 
                                    <Form className="user">
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <Field type="text" className="form-control form-control-user" id="first_name"
                                                    placeholder="First Name" name="first_name" />
                                                <ErrorMessage className="d-block invalid-feedback" name="first_name" component="span" />
                                            </div>
                                            <div className="col-sm-6">
                                                <Field type="text" className="form-control form-control-user" id="last_name"
                                                    placeholder="Last Name" name="last_name" />
                                                <ErrorMessage className="d-block invalid-feedback" name="last_name" component="span" />                                            
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <Field type="email" className="form-control form-control-user" id="email"
                                                placeholder="Email Address" name="email" />
                                                <ErrorMessage className="d-block invalid-feedback" name="email" component="span" />
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <Field type="password" className="form-control form-control-user"
                                                    id="password" placeholder="Password" name="password" />
                                                <ErrorMessage className="d-block invalid-feedback" name="password" component="span" />
                                            </div>
                                            <div className="col-sm-6">
                                                <Field type="password" className="form-control form-control-user"
                                                    id="confirm_password" placeholder="Repeat Password" name="confirm_password" />
                                                <ErrorMessage className="d-block invalid-feedback" name="confirm_password" component="span" />
                                            </div>
                                        </div>
                                        <input type="submit" value="Register Account" className="btn btn-primary btn-user btn-block" />
                                        <hr />
                                        <a href="index.html" className="btn btn-google btn-user btn-block">
                                            <i className="fab fa-google fa-fw"></i> Register with Google
                                        </a>
                                        <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                            <i className="fab fa-facebook-f fa-fw"></i> Register with Facebook
                                        </a>
                                    </Form>
                                </Formik>
                            <hr />
                            <div className="text-center">
                                <a className="small" href="forgot-password.html">Forgot Password?</a>
                            </div>
                            <div className="text-center">
                                <Link className="small" to="/login">Already have an account? Login!</Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
