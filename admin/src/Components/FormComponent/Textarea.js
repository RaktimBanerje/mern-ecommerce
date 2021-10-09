import React from 'react'
import { Field , ErrorMessage } from 'formik'

const Textarea = ({name, label, type, ...rest}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <Field as="textarea" className="form-control" id={name} name={name} {...rest} />
            <ErrorMessage className="d-block invalid-feedback" name={name} component="span" />
        </div>
    )
}

export default Textarea
