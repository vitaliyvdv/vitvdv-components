import React, { createElement } from "react"
import { Field } from "formik"

const FieldValidation = ({ name, component, children, onBlur, onChange, ...rest }) => {
  return (
    <Field name={name}>
      {({ field, form, meta }) =>
        createElement(
          component,
          {
            ...field,
            ...rest,
            error: meta.touched && meta.error ? meta.error : null,
            onBlur: () => {
              field.onBlur
              onBlur && onBlur()
            },
            onChange: e => {
              form.setFieldValue(field.name, e.target.value)
              onChange && onChange()
            }
          },
          null
        )
      }
    </Field>
  )
}

export default FieldValidation
