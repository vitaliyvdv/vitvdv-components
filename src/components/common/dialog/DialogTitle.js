import React from "react"
import tw, { styled } from "twin.macro"

const StyledDialogTitle = styled.div(({}) => [tw`flex-grow-0 flex-shrink-0 pt-5 px-6`])

const StyledDialogWrapper = styled.div(({}) => [tw`flex items-center pb-5`])

const StyledDialogTitleText = styled.h3(({}) => [tw`m-0 p-0`])

const DialogTitle = ({ title, children }) => {
  return (
    <StyledDialogTitle>
      <StyledDialogWrapper>
        <StyledDialogTitleText id='dialog_label'>{title}</StyledDialogTitleText>
        <div>{children}</div>
      </StyledDialogWrapper>
    </StyledDialogTitle>
  )
}

export default DialogTitle
