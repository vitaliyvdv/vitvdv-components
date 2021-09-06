import PropTypes from "prop-types"

import FormFieldList from "components/common/inputs/form-field/FormFieldList"

const RadioButtonList = ({ label, children, error, disabled, tooltip, name, horizontal }) => {
  return (
    <FormFieldList
      label={label}
      error={error}
      disabled={disabled}
      name={name}
      horizontal={horizontal}
      tooltip={tooltip}
    >
      {children}
    </FormFieldList>
  )
}

RadioButtonList.propTypes = {
  children: PropTypes.node,
  label: PropTypes.node,
  tooltip: PropTypes.node,
  error: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  horizontal: PropTypes.bool
}

RadioButtonList.defaultProps = {
  horizontal: false
}

export default RadioButtonList
