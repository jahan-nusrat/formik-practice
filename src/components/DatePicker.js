import { ErrorMessage, Field } from 'formik';
import React from 'react'
import DateView from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import TextError from './TextError';

const DatePicker = (props) => {
    const {label, name, ...rest} = props;
    return (
        <div className='form-control'>
            <label htmlFor={name}>{name}</label>
            <Field id={name} name={name} {...rest}>
                {
                    ({form, field}) =>{
                        const { setFieldValue } = form;
                        return (
                            <DateView id={name} {...field} {...rest} 
                            selected={field.value} 
                            onChange={val=> setFieldValue(name, val)} />
                        )
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default DatePicker
