import React, { forwardRef } from "react"
import PropTypes from "prop-types"
import SVG, { Props as SVGProps } from "react-inlinesvg"
// import { ReactSVG } from "react-svg"
import tw, { styled } from "twin.macro"

const StyledIcon = styled.div(({ size }) => [
  tw`inline-block align-middle flex-shrink-0 select-none`,
  size == "xs" && tw`icon-xs`,
  size == "sm" && tw`icon-sm`,
  size == "base" && tw`icon-base`,
  size == "lg" && tw`icon-lg`,
  size == "xl" && tw`icon-xl`
])

const IconSVG = ({ size, icon, ...rest }) => {
  const srcIcon = icon === "object" && icon !== null ? ({ src } = icon) : icon

  return <StyledIcon size={size}>{icon && <SVG src={srcIcon} {...rest} />}</StyledIcon>
}

IconSVG.propTypes = {
  size: PropTypes.oneOf(["xs", "sm", "base", "lg", "xl"])
}

IconSVG.defaultProps = {
  size: "base"
}

export default IconSVG
