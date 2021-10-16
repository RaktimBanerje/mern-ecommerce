import React from 'react'
import { Field , ErrorMessage } from 'formik'

const Select = ({name, label, type, options, ...rest}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <Field as="select" className="form-control" id={name} name={name} {...rest}>
                <React.Fragment>
                    <option value="" default>--Select--</option>
                    {
                        options.map(item =>
                            <option id={item.value} key={item.value}>{item.text}</option>
                        )
                    }
                </React.Fragment>
            </Field>
            <ErrorMessage className="d-block invalid-feedback" name={name} component="span" />
        </div>
    )
}

export default Select
