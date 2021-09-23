import React from 'react'
import { Field , ErrorMessage } from 'formik'

const Date = ({name, label, ...rest}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <Field>
                {
                    ({form, field})=>(
                        <input
                            id={name} 
                            name={name}
                            type="date"
                            {...rest}
                            onChange={(e)=> form.setFieldValue(name, e.target.value)}
                        />
                    )
                }
            </Field>
            <ErrorMessage className="d-block invalid-feedback" name={name} component="span" />
        </div>
    )
}

export default Date
