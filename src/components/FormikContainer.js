import React from 'react'
import {Formik, Form } from 'formik'
import * as Yup from 'yup'
import Formikontrol from './Formikontrol'

const FormikContainer = () => {
    const initialValues = {
        email: ''
    }
    const validationSchema= Yup.object({
        email: Yup.string().required('Required')
    })
    const onSubmit = values => {
        console.log('Form Values', values)
    }
    return (
        <Formik 
        initialValues={initialValues} 
        validationSchema = {validationSchema} 
        onSubmit = {onSubmit} 
        >
            {
                (formik)=> {
                    return (
                        <Form>
                            <Formikontrol 
                            control='input' 
                            type='email' 
                            label='Email' 
                            name='email' />
                            <button className="btn btn-danger" type='submit'>Submit</button>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default FormikContainer
