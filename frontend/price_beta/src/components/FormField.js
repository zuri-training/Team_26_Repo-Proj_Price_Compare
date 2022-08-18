import React from 'react'

const FormField = ({type, name, value, className, handleChange, labelText, placeholder}) => {
  return (
    <div>
        <label htmlFor={name}>{labelText}</label>
        <input
            id={name}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            className={className}
        />
    </div>
  )
}

export default FormField