import PropTypes from "prop-types"

import tw, { styled } from "twin.macro"

import { FormField } from ".."
import FormFieldWrapper from "src/components/common/inputs/form-field/FormFieldWrapper"
import { FormFieldContext } from "src/components/common/inputs/form-field/form-field-context"

const StyledInputSelect = styled.select(({ error }) => [
  tw`flex items-center h-full w-full px-0`,
  !error && tw`text-black`,
  error && tw`text-danger`
])

const StyledInputSelectWrapper = styled.div(({}) => [tw`relative w-full h-full`])

const Select = ({
  id,
  label,
  textPrepend,
  textAppend,
  startIcon,
  endIcon,
  value,
  error,
  size,
  disabled,
  readonly,
  onFocus,
  onBlur,
  autoFocus,
  className,
  action,
  tooltip,
  placeholder,
  children,
  ...rest
}) => {
  return (
    <FormField className={className} label={label} tooltip={tooltip} error={error} disabled={disabled}>
      <FormFieldWrapper
        size={size}
        startIcon={startIcon}
        endIcon={endIcon}
        textPrepend={textPrepend}
        textAppend={textAppend}
        action={action}
        error={error}
        disabled={disabled}
      >
        <FormFieldContext.Consumer>
          {({ inputFocus, element }) => (
            <StyledInputSelectWrapper>
              <StyledInputSelect
                {...rest}
                id={id}
                ref={element}
                value={value}
                disabled={disabled}
                onFocus={() => {
                  inputFocus()
                  if (onFocus) {
                    onFocus()
                  }
                }}
                onBlur={() => {
                  inputFocus()
                  if (onBlur) {
                    onBlur()
                  }
                }}
              >
                <option value='' disabled>
                  {placeholder}
                </option>
                {children}
              </StyledInputSelect>
            </StyledInputSelectWrapper>
          )}
        </FormFieldContext.Consumer>
      </FormFieldWrapper>
    </FormField>
  )
}

Select.propTypes = {
  size: PropTypes.oneOf(["sm", "base", "lg", "xl"]),
  label: PropTypes.node,
  tooltip: PropTypes.node,
  id: PropTypes.string,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  textPrepend: PropTypes.string,
  textAppend: PropTypes.string,
  action: PropTypes.node,
  error: PropTypes.string,
  value: PropTypes.node,
  children: PropTypes.node,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool
}

Select.defaultProps = {
  size: "base",
  disabled: false
}

export default Select
