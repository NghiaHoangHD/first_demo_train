import { useField, ErrorMessage } from 'formik'
import React from 'react'
import '../../assets/scss/textField.scss'

type Props = {
  label: string
  name: string
  type: string
}
export const TextField: React.FC<Props> = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  console.log(field, meta)
  return (
    <div>
      <label htmlFor={field.name}>{label}</label>
      <input
        {...field}
        {...props}
        className={`form-control shadow-none mt-3 mb-3 ${
          meta.touched && meta.error && 'is-invalid'
        }`}
        autoComplete="off"
      ></input>
      <ErrorMessage
        component="div"
        name={field.name}
        className="errorMessage mt-3"
      />
    </div>
  )
}
