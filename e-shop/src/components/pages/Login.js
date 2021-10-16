import { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FieldControl from '../FormComponent/FieldControl'
import { UserContext } from '../../App'
import authApi from '../../services/api/auth.api'

const Login = () => {

    const { state, setState } = useContext(UserContext)

    const initialValues = { email: 'raktimbanerjee9@gmail.com', password: 'Raktim365249' }

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Required')
    })
    
    const onSubmit = (values) => {
        authApi.login(values)
            .then(res => res.status === 200 && setState({...state, loggedIn: true}))
            .catch(err => {
                setState({...state, loggedIn: false})
                alert(err.response.data.message)
            })
    }
    

    useEffect(() => {
        document.getElementById('loginModal').style.display = 'block'
    }, [])

    return (
        <div className="modal fade show" id="loginModal" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content" style={{border: '1px solid green'}}>
                    <div className="modal-header">
                        <h5 className="modal-title text-center">Log In</h5>
                    </div>
                    <div className="modal-body">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                        >
                            <Form>
                                <FieldControl control="input" name="email" label="Email" />
                                <FieldControl control="input" name="password" label="Password" />
                                <div className="right-w3l">
                                    <input type="submit" className="form-control" value="Log in" />
                                </div>
                                <div className="sub-w3l">
                                    <div className="custom-control custom-checkbox mr-sm-2">
                                        <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                                        <label className="custom-control-label" htmlFor="customControlAutosizing">Remember me?</label>
                                    </div>
                                </div>
                            </Form>
                        </Formik>
                        <p className="text-center dont-do mt-3">Don't have an account?
                            <Link to="/register" data-toggle="modal" data-target="#exampleModal2"> Register Now </Link>
                        </p>
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


export default Login
