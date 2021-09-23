import React from 'react'
import { Field, ErrorMessage } from 'formik'

const Input = ({name, label, ...rest}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <Field>
                {
                    ({form})=>(
                        <React.Fragment>
                        <input
                            id={name} 
                            name={name}
                            type="file"
                            onChange={(e)=>{ 
                                form.setFieldValue(name, e.target.files[0])
                                document.getElementsByName(`${name}-preview`)[0].src = URL.createObjectURL(e.target.files[0])
                                 
                            }}
                            className="form-control" 
                       />
                       {
                           <img name={`${name}-preview`} height="200" width="200" />
                       }
                       </React.Fragment>
                    )
                }
            </Field>
            <ErrorMessage className="d-block invalid-feedback" name={name} component="span" />
        </div>
    )
}

export default Input
