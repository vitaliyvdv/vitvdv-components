import React from "react"
import PropTypes from "prop-types"

import tw, { styled } from "twin.macro"

import FormField from "src/components/common/inputs/form-field"
import { FormFieldContext } from "src/components/common/inputs/form-field/form-field-context"
import FormFieldWrapper from "src/components/common/inputs/form-field/FormFieldWrapper"

const StyledTextArea = styled.textarea(({ error }) => [
  tw`block py-3 px-4 w-full max-w-full min-w-full rounded border`,
  `min-height: 124px;
  max-height: 260px`,

  !error ? tw`text-black` : tw`text-danger`
])

const TextArea = ({ className, label, error, disabled, onFocus, onBlur, autoFocus, tooltip, ...rest }) => {
  return (
    <FormField
      label={label}
      error={error}
      disabled={disabled}
      autoFocus={autoFocus}
      className={className}
      tooltip={tooltip}
    >
      <FormFieldWrapper textarea error={error} disabled={disabled} autoFocus={autoFocus}>
        <FormFieldContext.Consumer>
          {({ inputFocus, element, focused }) => (
            <StyledTextArea
              ref={element}
              error={error}
              focused={focused}
              disabled={disabled}
              onFocus={() => {
                inputFocus()
                onFocus && onFocus()
              }}
              onBlur={() => {
                inputFocus()
                onBlur && onBlur()
              }}
              {...rest}
            />
          )}
        </FormFieldContext.Consumer>
      </FormFieldWrapper>
    </FormField>
  )
}

TextArea.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.node,
  id: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool
}

export default TextArea
