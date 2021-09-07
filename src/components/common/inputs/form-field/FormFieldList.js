import React from "react"
import tw, { styled, css } from "twin.macro"

import { FormField } from ".."

const ListStyles = css`
  & {
    ${tw`flex flex-wrap items-start`};

    & > *:not(:last-child) {
      ${tw`mr-6`}
    }
  }
`

const StyledFormFieldList = styled.div(({ horizontal }) => [
  horizontal && ListStyles,
  !horizontal && tw`grid grid-cols-1 gap-2`
])

const FormFieldList = ({ horizontal, label, error, disabled, name, tooltip, children }) => {
  return (
    <FormField label={label} error={error} disabled={disabled} tooltip={tooltip}>
      <StyledFormFieldList horizontal={horizontal}>
        {React.Children.map(children, child => React.cloneElement(child, { name, disabled, error }))}
      </StyledFormFieldList>
    </FormField>
  )
}

export default FormFieldList
