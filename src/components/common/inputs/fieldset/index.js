import React from "react"
import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"

const StyledFieldset = styled.div(({ gap }) => [
  tw`grid`,
  gap == "sm" && tw`gap-3`,
  gap == "base" && tw`gap-5`,
  gap == "lg" && tw`gap-6`,
  gap == "xl" && tw`gap-8`
])

const Fieldset = ({ children, gap }) => {
  return <StyledFieldset gap={gap}>{children}</StyledFieldset>
}

Fieldset.propTypes = {
  children: PropTypes.node,
  gap: PropTypes.oneOf(["sm", "base", "lg", "xl"])
}

Fieldset.defaultProps = {
  gap: "base"
}

export default Fieldset
