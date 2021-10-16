import React from 'react'
import { Field , ErrorMessage } from 'formik'

const Input = ({name, label, ...rest}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <Field className="form-control" id={name} name={name} {...rest} />
            <ErrorMessage className="d-block invalid-feedback" name={name} component="span" />
        </div>
    )
}

export default Input
