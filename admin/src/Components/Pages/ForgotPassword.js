import React from 'react'
import { Formik, Form, Field , ErrorMessage } from 'formik'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import authApi from '../../Services/api/auth.api'

const ForgotPassword = () => {
    
    const initialValues = { email: '' }
    
    const validationSchema = Yup.object().shape({
        email: Yup.string()
        .email('Invalid email address')
        .required('Required')
    })

    const onSubmit = async (values) => {
        try{
            const res = await authApi.forgotPassword(values)
        }
        catch(error){ console.log(error) }
    }

    document.body.classList.add('bg-gradient-primary');
    
    return (
        <div className="container">
        
           <div className="row justify-content-center">

            <div className="col-xl-10 col-lg-12 col-md-9">

                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        
                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-block bg-password-image"></div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
                                        <p className="mb-4">We get it, stuff happens. Just enter your email address below
                                            and we'll send you a link to reset your password!</p>
                                    </div>
                                    <Formik 
                                        initialValues={initialValues} 
                                        validationSchema={validationSchema} 
                                        onSubmit={onSubmit}
                                    >
                                        <Form className="user">
                                            <div className="form-group">
                                                <Field type="email" className="form-control form-control-user"
                                                    id="email" aria-describedby="emailHelp"
                                                    placeholder="Enter Email Address..." name="email"/>
                                                <ErrorMessage className="d-block invalid-feedback" name="email" component="span"/>
                                            </div>
                                            <input type="submit" value="Reset Password" className="btn btn-primary btn-user btn-block" />
                                        </Form>
                                    </Formik>
                                    <hr />
                                    <div className="text-center">
                                        <Link className="small" to="/register">Create an Account!</Link>
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

        </div>

        </div>
    )
}

export default ForgotPassword
