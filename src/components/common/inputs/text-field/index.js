import React from "react"
import PropTypes from "prop-types"

import tw, { styled } from "twin.macro"

import { FormField } from ".."
import FormFieldWrapper from "src/components/common/inputs/form-field/FormFieldWrapper"
import { FormFieldContext } from "src/components/common/inputs/form-field/form-field-context"

const StyledInputText = styled.input(({ error }) => [
  tw`flex items-center h-full w-full px-0`,
  !error ? tw`text-black` : tw`text-danger`
])

const TextField = ({
  label,
  textPrepend,
  textAppend,
  startIcon,
  endIcon,
  error,
  size,
  disabled,
  readonly,
  onFocus,
  onBlur,
  autoFocus,
  action,
  tooltip,
  ...rest
}) => {
  return (
    <FormField label={label} error={error} disabled={disabled} autoFocus={autoFocus} tooltip={tooltip}>
      <FormFieldWrapper
        textPrepend={textPrepend}
        textAppend={textAppend}
        startIcon={startIcon}
        endIcon={endIcon}
        error={error}
        disabled={disabled}
        size={size}
        autoFocus={autoFocus}
        action={action}
      >
        <FormFieldContext.Consumer>
          {({ inputFocus, element }) => (
            <StyledInputText
              {...rest}
              ref={element}
              autoFocus={autoFocus}
              autoComplete='off'
              disabled={disabled}
              error={error}
              aria-label={label ? label : textPrepend}
              onFocus={() => {
                inputFocus()
                onFocus && onFocus()
              }}
              onBlur={() => {
                inputFocus()
                onBlur && onBlur()
              }}
            />
          )}
        </FormFieldContext.Consumer>
      </FormFieldWrapper>
    </FormField>
  )
}

TextField.propTypes = {
  label: PropTypes.node,
  error: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.oneOf(["sm", "base", "lg", "xl"]),
  disabled: PropTypes.bool
}

TextField.defaultProps = {
  type: "text",
  size: "base",
  disabled: false
}

export default TextField
