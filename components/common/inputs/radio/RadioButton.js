import React, { forwardRef } from "react"
import PropTypes from "prop-types"

import FormFieldInput from "components/common/inputs/form-field/FormFieldInput"

const RadioButton = forwardRef(({ id, label, checked, disabled, error, tooltip, htmlFor, ...rest }, ref) => {
  return (
    <FormFieldInput
      type='radio'
      id={id}
      htmlFor={htmlFor}
      label={label}
      disabled={disabled}
      error={error}
      tooltip={tooltip}
      ref={ref}
      {...rest}
    />
  )
})

RadioButton.propTypes = {
  id: PropTypes.string,
  label: PropTypes.node,
  value: PropTypes.any,
  htmlFor: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool
}

export default RadioButton
