import { useEffect } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FieldControl from '../FormComponent/FieldControl'
import authApi from '../../services/api/auth.api'

const Register = () => {
    
    const initialValues = { name: '', email: '', password: '', confirm_password: '' }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Required'), 
        confirm_password: Yup.string().required('Required').oneOf([Yup.ref('password'), null], 'Password doesn\'t match')
    })
    
    const onSubmit = async (values) => {
        try{
            const res = await authApi.register(values)
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

    useEffect(() => {
        document.getElementById('registerModal').style.display = 'block'
    })

    return (
        <div className="modal fade show" id="registerModal" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content" style={{border: '1px solid green'}}>
                    <div className="modal-header">
                        <h5 className="modal-title">Register</h5>
                    </div>
                    <div className="modal-body">

                        <div id="register-alert" className="alert"></div>

                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                        >
                            <Form>
                        
                                <FieldControl control="input" name="name" label="Name" />
                                <FieldControl control="input" name="email" label="Email" />
                                <FieldControl control="input" name="password" label="Password" />
                                <FieldControl control="input" name="confirm_password" label="Confirm password" />

                                <div className="right-w3l">
                                    <input type="submit" className="form-control" value="Register" />
                                </div>
                                <div className="sub-w3l">
                                    <div className="custom-control custom-checkbox mr-sm-2">
                                        <input type="checkbox" className="custom-control-input" id="customControlAutosizing2" name="t&c" />
                                        <label className="custom-control-label" htmlFor="customControlAutosizing2">I Accept to the Terms
                                            & Conditions</label>
                                    </div>
                                </div>
                            </Form>
                        </Formik>
                        <p className="text-center dont-do mt-3">(Or)</p>
                        <div className="social text-center mt-2">
                            <ul className="list-unstyled">
                                <li className="d-inline">
                                    <a className="icon fb" href="#facebook">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="d-inline mx-1">
                                    <a className="icon tw" href="#twitter">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="d-inline">
                                    <a className="icon gp" href="#google-plus">
                                        <i className="fab fa-google-plus-g"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
