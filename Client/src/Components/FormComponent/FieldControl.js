import React from 'react'

import Input from './Input'
import Textarea from './Textarea'
import Select from './Select'
import Checkbox from './Checkbox'
import Radio from './Radio'
import File from './File'
import Date from './Date'

const FieldControl = (props) => {
    const { control, ...rest } = props
    
    switch(control){
        case 'input' : return <Input {...rest}/>
        case 'textarea' : return <Textarea {...rest} />
        case 'select' : return <Select {...rest} />
        case 'checkbox' : return <Checkbox {...rest} />
        case 'radio' : return <Radio {...rest} />
        case 'file' : return <File {...rest} />
        case 'date' : return <Date {...rest} />
        default : return null
    }
}

export default FieldControl
