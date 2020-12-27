import { Form, Formik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import Formikontrol from '../Formikontrol'

const LoginForm = () => {
    const initialValues = {
        email:'',
        password:''
    }
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid Email Address').required('Required'),
        password: Yup.string().required('Required')
    })
    const onSubmit = (values) =>{
        console.log('Form Values', values)
    }
    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
            {
                formik => {
                    return (
                        <Form>
                            <Formikontrol
                                control='input'
                                type='email'
                                label='Your Email'
                                name='email'
                            />
                            <Formikontrol
                                control='input'
                                type='password'
                                label='Your Password'
                                name='password'
                            />
                            <button disabled={!formik.isValid} className="btn btn-danger" type='submit'>Submit</button>
                            <Link to='/register' style={{padding:'0 1.5rem'}}>
                                <a href="/register">Registration page</a>
                            </Link>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default LoginForm
