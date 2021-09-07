import PropTypes from "prop-types"
import { ReactSVG } from "react-svg"

import tw, { styled } from "twin.macro"

const StyledIcon = styled(ReactSVG)(({ size }) => [
  tw`inline-block align-middle flex-shrink-0 select-none`,
  size == "xs" && tw`icon-xs`,
  size == "sm" && tw`icon-sm`,
  size == "base" && tw`icon-base`,
  size == "lg" && tw`icon-lg`,
  size == "xl" && tw`icon-xl`
])

const Icon = ({ size, icon, ...rest }) => {
  return <StyledIcon size={size} {...rest} src={icon} />
}

Icon.propTypes = {
  size: PropTypes.oneOf(["xs", "sm", "base", "lg", "xl"])
}

Icon.defaultProps = {
  size: "base"
}

export default Icon
