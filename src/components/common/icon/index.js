import React, {forwardRef} from "react"
import PropTypes from "prop-types"
import SVG, { Props as SVGProps } from "react-inlinesvg"
import tw, { styled } from "twin.macro"

const StyledIcon = styled.div(({ size }) => [
  tw`inline-block align-middle flex-shrink-0 select-none`,
  size == "xs" && tw`icon-xs`,
  size == "sm" && tw`icon-sm`,
  size == "base" && tw`icon-base`,
  size == "lg" && tw`icon-lg`,
  size == "xl" && tw`icon-xl`
])

const Icon = forwardRef(({ size, icon, ...rest }, ref) => {
  return (
    <StyledIcon size={size}>
      <SVG id={icon} ref={ref} src={icon} {...rest} />
    </StyledIcon>
  )
})

Icon.propTypes = {
  size: PropTypes.oneOf(["xs", "sm", "base", "lg", "xl"])
}

Icon.defaultProps = {
  size: "base"
}

export default Icon
