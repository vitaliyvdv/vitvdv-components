import React, { useContext, useEffect } from "react"
import PropTypes from "prop-types"
import tw, { styled, css } from "twin.macro"

import Icon from "src/components/common/icon"
import Text from "src/components/common/text"

import { FormFieldContext } from "./form-field-context"

const StyledWrapper = styled.div(({ focused, error, size, disabled, textarea }) => [
  tw`flex items-center rounded border border-solid border-gray border-opacity-100 overflow-hidden`,

  // !error ? (focused ? tw`border-primary` : tw`border-gray`) : tw`border-danger`,

  disabled && tw`opacity-50 border-gray bg-gray`,

  size === "sm" && !textarea && tw`h-sm px-3`,
  size === "base" && !textarea && tw`h-md px-4`,
  size === "lg" && !textarea && tw`h-lg px-4`,
  size === "xl" && !textarea && tw`h-xl px-5`,

  `transition: border-color 0.3s ease 0s`
])

const StyledWrapperOnFocus = styled(StyledWrapper)(({}) => [tw`border-primary`])

const StyledWrapperError = styled(StyledWrapper)(({}) => [tw`border-danger`])

const StyledTextPrepend = styled(Text)(({ error }) => [
  tw`whitespace-nowrap flex-shrink-0 mr-2`,
  error && tw`text-danger`
])

const StyledTextAppend = styled(Text)(({ error }) => [
  tw`whitespace-nowrap flex-shrink-0 ml-2`,
  error && tw`text-danger`
])

const StyledIcon = styled(Icon)(({ error }) => [error && tw`text-danger`])

const StyledStartIcon = styled(StyledIcon)(() => [tw`mr-2`])

const StyledEndIcon = styled(StyledIcon)(() => [tw`ml-2`])

const StyledFieldChild = css`
  & {
    input,
    select,
    textarea {
      ${tw`appearance-none leading-normal outline-none placeholder-black placeholder-opacity-35 truncate bg-transparent border-none border-0`};
      transition: color 0.3s ease 0s;

      &:focus,
      &:active,
      &:hover {
        ${tw`outline-none`}
      }

      &:disabled {
        ${tw`cursor-not-allowed`}
      }
    }
  }
`
const StyledField = styled.div(() => [tw`w-full h-full`, StyledFieldChild])

const FormFieldWrapper = ({
  textPrepend,
  textAppend,
  startIcon,
  endIcon,
  error,
  size,
  autoFocus,
  action,
  children,
  disabled,
  textarea,
  ...rest
}) => {
  const inputField = <StyledField>{children}</StyledField>

  const context = useContext(FormFieldContext)

  useEffect(() => {
    console.log(context)
  }, [context])

  const Wrapper = !error ? (context.focused ? StyledWrapperOnFocus : StyledWrapper) : StyledWrapperError

  return (
    <FormFieldContext.Consumer>
      {({ inputFocus, focused }) => (
        <Wrapper
          size={size}
          focused={focused}
          error={error}
          autoFocus={autoFocus}
          disabled={disabled}
          textarea={textarea}
          {...rest}
        >
          {!textarea ? (
            <>
              {startIcon && <StyledStartIcon size={size} error={error} onClick={inputFocus} icon={startIcon} />}

              {textPrepend && (
                <StyledTextPrepend size={size} error={error} onClick={inputFocus}>
                  {textPrepend}
                </StyledTextPrepend>
              )}

              {inputField}

              {action && (
                <div className='ml-2 flex-shrink-0'>
                  {React.Children.map(action, child => React.cloneElement(child, { size, error }))}
                </div>
              )}

              {textAppend && (
                <StyledTextAppend size={size} onClick={inputFocus}>
                  {textAppend}
                </StyledTextAppend>
              )}

              {endIcon && <StyledEndIcon size={size} error={error} onClick={inputFocus} icon={endIcon} />}
            </>
          ) : (
            <>{inputField}</>
          )}
        </Wrapper>
      )}
    </FormFieldContext.Consumer>
  )
}

FormFieldWrapper.propTypes = {
  label: PropTypes.node,
  error: PropTypes.string,
  size: PropTypes.oneOf(["sm", "base", "lg", "xl"]),
  disabled: PropTypes.bool,
  textarea: PropTypes.bool
}

FormFieldWrapper.defaultProps = {
  size: "base",
  disabled: false,
  textarea: false
}

export default FormFieldWrapper
