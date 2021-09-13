import React from "react"
import tw, { styled } from "twin.macro"

const StyledDialogContent = styled.div(({}) => [tw`flex-grow flex-shrink overflow-auto`])

const StyledDialogContentWrapper = styled.div(({}) => [tw`pt-4 px-6 pb-6`])

const DialogContent = ({ children, className, ...rest }) => {
  return (
    <StyledDialogContent id='dialog_desc' {...rest}>
      <StyledDialogContentWrapper>{children}</StyledDialogContentWrapper>
    </StyledDialogContent>
  )
}

export default DialogContent
