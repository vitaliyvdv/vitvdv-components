import React from "react"
import tw, { styled } from "twin.macro"

const StyledDialogActions = styled.div(({}) => [tw`flex-grow-0 flex-shrink-0 px-6 pb-4`])

const StyledDialogActionsContent = styled.div(({}) => [tw`flex justify-end items-center pt-4`])

const DialogActions = ({ children, className, ...rest }) => {
  return (
    <StyledDialogActions {...rest}>
      <StyledDialogActionsContent>{children}</StyledDialogActionsContent>
    </StyledDialogActions>
  )
}

export default DialogActions
