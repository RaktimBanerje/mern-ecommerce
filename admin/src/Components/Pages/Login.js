import React, { useContext } from 'react'
import { Formik, Form, Field ,ErrorMessage } from 'formik'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { UserContext } from '../../App'

import authApi from '../../Services/api/auth.api'

document.body.classList.add('bg-gradient-primary')

const Login = (props) => {
    const {state, setState} = useContext(UserContext)

    const initialValues = { email: 'raktimbanerjee9@gmail.com', password: 'Raktim365249' }

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup.string()
            .min(6, 'Password can\'t be shorter than 6 charecters')
            .max(22, 'Password can\'t br longer than 22 charecters')
            .required('Required'),
    })
    
    const onSubmit = async (values) => {
        try{
            const res = await authApi.login(values)
            if( res.status === 200 ){
                setState({
                    ...state,
                    loggedIn: true
                })
            }
        }   
        catch(err){
            setState({
                ...state,
                loggedIn: false
            })
            alert(err.response.data.message)
        }
    }
    
    return (
        <div className="container">
        
            <div className="row justify-content-center">

                <div className="col-xl-10 col-lg-12 col-md-9">

                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                        </div>
                                        <Formik 
                                            initialValues={initialValues}
                                            validationSchema={validationSchema}
                                            onSubmit={onSubmit}
                                        >
                                            <Form className="user">
                                                <div className="form-group">
                                                    <Field type="email" className="form-control form-control-user" name="email"
                                                        id="email" aria-describedby="emailHelp"
                                                        placeholder="Enter Email Address..." />
                                                    <ErrorMessage name="email" className="d-block invalid-feedback" component="span" />
                                                </div>
                                                <div className="form-group">
                                                    <Field type="password" className="form-control form-control-user" name="password"
                                                        id="password" placeholder="Password" />
                                                    <ErrorMessage name="password" className="d-block invalid-feedback" component="span" />    
                                                </div>
                                                {/* <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                        <Field type="checkbox" className="custom-control-input" id="customCheck" />
                                                        <label className="custom-control-label" for="customCheck">Remember
                                                            Me</label>
                                                    </div>
                                                </div> */}
                                                <Field type="submit" value="Login" href="index.html" className="btn btn-primary btn-user btn-block" />
                                                <hr />
                                                <a href="index.html" className="btn btn-google btn-user btn-block">
                                                    <i className="fab fa-google fa-fw"></i> Login with Google
                                                </a>
                                                <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                                    <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                                </a>
                                        </Form>
                                        </Formik>
                                        <hr />
                                        <div className="text-center">
                                            <Link className="small" to="/forgot-password">Forgot Password?</Link>
                                        </div>
                                        <div className="text-center">
                                            <Link className="small" to="/register">Create an Account!</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Login
