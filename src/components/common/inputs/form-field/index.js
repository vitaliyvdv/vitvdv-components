import React, { useRef, useState, useEffect } from "react"
import PropTypes from "prop-types"

import tw, { styled } from "twin.macro"

import Label from "src/components/common/inputs/label"
import Error from "src/components/common/inputs/error"

import { FormFieldContext } from "./form-field-context"

const StyledLabel = styled(Label)(({}) => [tw`mb-2`])

const StyledError = styled(Error)(({}) => [tw`mt-1`])

const FormField = ({ label, error, disabled, autoFocus, tooltip, children, ...rest }) => {
  const [focused, setFocused] = useState(false)
  const inputEl = useRef(null)

  const inputFocus = () => {
    if (inputEl.current && !focused) {
      inputEl.current.focus()
      setFocused(true)
    } else {
      setFocused(false)
    }
  }

  useEffect(() => {
    autoFocus && inputFocus()
  }, [])

  return (
    <FormFieldContext.Provider
      value={{
        labelClick: inputFocus,
        inputFocus: inputFocus,
        element: inputEl,
        focused: focused
      }}
    >
      <div autoFocus={autoFocus}>
        {label && (
          <FormFieldContext.Consumer>
            {({ labelClick }) => (
              <StyledLabel onClick={labelClick} disabled={disabled} label={label} tooltip={tooltip} />
            )}
          </FormFieldContext.Consumer>
        )}
        {children}
        {error && <StyledError>{error}</StyledError>}
      </div>
    </FormFieldContext.Provider>
  )
}

FormField.propTypes = {
  label: PropTypes.node,
  tooltip: PropTypes.node,
  error: PropTypes.string,
  disabled: PropTypes.bool
}

export default FormField
