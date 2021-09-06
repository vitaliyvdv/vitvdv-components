import React, { forwardRef } from "react"
import PropTypes from "prop-types"

import FormFieldInput from "components/common/inputs/form-field/FormFieldInput"

const Checkbox = forwardRef(({ id, label, checked, disabled, error, htmlFor, tooltip, ...rest }, ref) => {
  return (
    <FormFieldInput
      type='checkbox'
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

Checkbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.node,
  tooltip: PropTypes.node,
  htmlFor: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool
}

export default Checkbox
