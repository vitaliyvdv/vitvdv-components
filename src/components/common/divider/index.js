import React from "react"
import tw, { styled } from "twin.macro"

const StyledDivider = styled.hr(({}) => [`label: divider`, tw`block h-0 border-0 outline-none`])

const Divider = ({ ...rest }) => {
  return <StyledDivider {...rest} />
}

export default Divider
