import React, { useState, useEffect, useContext, useRef } from "react"
import PropTypes from "prop-types"

import tw, { styled } from "twin.macro"

import Label from "src/components/common/inputs/label"
import Error from "src/components/common/inputs/error"

import { FormFieldContext } from "./form-field-context"

const StyledLabel = styled(Label)(({}) => [tw`mb-2`])

const StyledError = styled(Error)(({}) => [tw`mt-1`])

const FormField = ({ label, error, disabled, autoFocus, tooltip, children, ...rest }) => {
  const context = useContext(FormFieldContext)

  const [focused, setFocused] = useState(context.focused)
  const inputEl = useRef(null)

  const setInputFocus = () => {
    if (inputEl.current && !disabled && !focused) {
      inputEl.current.focus()
      setFocused(true)
    } else {
      setFocused(false)
    }
  }

  useEffect(() => {
    autoFocus && setInputFocus()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const contextValue = { focused, setFocused, inputFocus: setInputFocus, element: inputEl }

  return (
    <FormFieldContext.Provider value={contextValue}>
      <div>
        {label && <StyledLabel onClick={setInputFocus} disabled={disabled} label={label} tooltip={tooltip} />}
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
