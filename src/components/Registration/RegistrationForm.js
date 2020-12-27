import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import Formikontrol from '../Formikontrol'

const RegistrationForm = () => {
    const mocOptions = [
        {key: 'Email', value:'mocEmail'},
        {key: 'Telephone', value:'mocTelephone'}
    ]
    const initialValues = {
        email: '',
        password : '',
        confirmPassword : '',
        modeOfContact: '',
        phone : ''
    }
    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid Email Address')
            .required('Required!'),
        password : Yup.string().required('Required!'),
        confirmPassword : Yup.string()
            .oneOf([Yup.ref('password'),''], 'Password must match')
            .required('Required!'),
        modeOfContact: Yup.string().required('Required!'),
        phone: Yup.string().when('modeOfContact' , {
            is : 'mocTelephone',
            then : Yup.string().required('Required')
        })
    })
    const onSubmit = values =>{
        console.log('Form data', values)
    }
    return (
        <Formik
        initialValues = {initialValues}
        validationSchema = {validationSchema}
        onSubmit = {onSubmit}
        >
            {
                formik => (
                    <Form>
                        <Formikontrol
                            control='input'
                            type='email'
                            name= 'email'
                            label = 'Email'
                        />
                        <Formikontrol
                            control='input'
                            type='password'
                            name= 'password'
                            label = 'Password'
                        />
                        <Formikontrol
                            control='input'
                            type='password'
                            name= 'confirmPassword'
                            label = 'Confirm Password'
                        />
                        <Formikontrol
                            control='radio'
                            name= 'modeOfContact'
                            label = 'Mode of contact'
                            options = {mocOptions}
                        />
                        <Formikontrol
                            control='input'
                            type='text'
                            name= 'phone'
                            label = 'Phone'
                        />
                        <button type='submit' disabled={!formik.isValid}>Register</button>
                    </Form>
                )
            }
        </Formik>
    )
}

export default RegistrationForm
