import React from 'react'
import { Field , ErrorMessage } from 'formik'

const Checkbox = ({name, label, options, ...rest}) => {
    console.log(options)
    return (
        <div className="form-group">
            <label htmlFor={name} className="d-block">{label}</label>
            <Field id={name} name={name} {...rest}>
                {
                    ({field})=>(
                        options.map((item, idx)=>(
                            <div className="form-check form-check-inline" key={idx}>
                                <input 
                                    className="form-check-input"
                                    type="checkbox"
                                    {...field}
                                    value={item.value}
                                    checked={field.value.includes(item.value)} 
                                />
                                <label className="form-check-label">{item.text}</label>
                            </div>
                        ))
                    )
                }
            </Field>
            <ErrorMessage className="d-block invalid-feedback" name={name} component="span" />
        </div>
    )
}

export default Checkbox
