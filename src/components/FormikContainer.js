import React from 'react'
import {Formik, Form } from 'formik'
import * as Yup from 'yup'
import Formikontrol from './Formikontrol'

const FormikContainer = () => {
    const dropdownOptions = [
        {key:'Select an Option', value:''},
        {key:'Option 1' , value:'option1'},
        {key:'Option 2' , value:'option2'},
        {key:'Option 3' , value:'option3'},
        {key:'Option 4' , value:'option4'},
    ]
    const radioOptions = [
        {key:'Option 2' , value:'rOption2'},
        {key:'Option 3' , value:'rOption3'},
        {key:'Option 4' , value:'rOption4'},
    ]
    const checkBoxOptions = [
        {key:'Option 1' , value:'cOption1'},
        {key:'Option 2' , value:'cOption2'},
        {key:'Option 3' , value:'cOption3'},
    ]
    const initialValues = {
        email: '',
        description:'',
        selectOption:'',
        radioOption:'',
        checkBoxOption:[],
        birthDate: null
    }
    const validationSchema= Yup.object({
        email: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
        selectOption:Yup.string().required('Required'),
        radioOption:Yup.string().required('Required'),
        checkBoxOption:Yup.array().required('Required'),
        birthDate:Yup.date().required('Required').nullable()
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
                            <Formikontrol
                                control='textarea'
                                type='text'
                                label='Description'
                                name='description'
                            />
                            <Formikontrol
                                control='select'
                                label='Select A Topic'
                                name='selectOption'
                                options={dropdownOptions}
                            />
                            <Formikontrol 
                                control='radio'
                                label='Choose an option'
                                name='radioOption'
                                options={radioOptions}
                            />
                            <Formikontrol 
                                control='checkbox'
                                label='Checkbox Topics'
                                name='checkBoxOption'
                                options={checkBoxOptions}
                            />
                            <Formikontrol 
                                control='date'
                                label='Birth Date'
                                name='birthDate'
                            />
                            <button className="btn btn-danger" type='submit'>Submit</button>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default FormikContainer
