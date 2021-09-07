import React, { forwardRef } from "react"
import PropTypes from "prop-types"

import tw, { styled, css } from "twin.macro"

import Label from "src/components/common/inputs/label"

const StyledIFormFieldInput = styled.div(({}) => [tw`relative pl-7`])

const StyledLabel = styled(Label)(({ disabled }) => [disabled && tw`cursor-not-allowed`])

const StyledInput = styled.input(({}) => [tw`absolute invisible top-0 left-0`])

const StyledCommon = css`
  & {
    top: 2px;
    left: 0;
    width: 20px;
    height: 20px;
    transition: border-color 0.3s ease, background-color 0.3s ease;

    &,
    &:active,
    &:focus {
      ${tw`outline-none`}
    }
  }

  *:checked + & {
    ${tw`border-primary bg-primary`}
  }
`

const StyledIconCheckbox = css``

const StyledRadioButton = css`
  & {
    &:before {
      content: "";
      ${tw`block invisible opacity-0 rounded-full bg-white w-2 h-2`};
      transition: visibility 0s ease 0.3s, opacity 0.3s ease 0s;
    }
  }

  *:checked + & {
    &:before {
      ${tw`visible opacity-100`};
      transition-delay: 0s;
    }
  }
`

const StyledIcon = styled.div(({ disabled, error, type }) => [
  tw`flex absolute justify-center items-center border-2 border-black border-opacity-10 cursor-pointer `,
  StyledCommon,

  type === "checkbox" && StyledIconCheckbox,
  type === "checkbox" && tw`rounded`,

  type === "radio" && StyledRadioButton,
  type === "radio" && tw`rounded-full`,

  error && tw`border-danger`,
  disabled && tw`select-none cursor-not-allowed bg-gray opacity-50`
])

const FormFieldInput = forwardRef(({ id, label, checked, disabled, error, htmlFor, tooltip, type, ...rest }, ref) => {
  return (
    <StyledIFormFieldInput>
      <StyledLabel disabled={disabled} htmlFor={htmlFor} label={label} tooltip={tooltip}>
        <StyledInput type={type} disabled={disabled} ref={ref} {...rest} />
        <StyledIcon disabled={disabled} type={type} error={error} />
      </StyledLabel>
    </StyledIFormFieldInput>
  )
})

FormFieldInput.propTypes = {
  type: PropTypes.oneOf(["checkbox", "radio"])
}

FormFieldInput.defaultProps = {
  type: "checkbox"
}

export default FormFieldInput
