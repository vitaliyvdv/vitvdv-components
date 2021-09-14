import React from "react"
import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"

import Icon from "src/components/common/icon"

import PreloaderSVG from "src/static/images/svg/preloader.svg"

const StyledPreloader = styled.div(({}) => [tw`flex justify-center items-center`])

const Preloader = ({ size, ...rest }) => {
  return (
    <StyledPreloader {...rest}>
      <Icon size={size} icon={PreloaderSVG}></Icon>
    </StyledPreloader>
  )
}

Preloader.propTypes = {
  size: PropTypes.oneOf(["sm", "base", "lg", "xl"])
}

Preloader.defaultProps = {
  size: "base"
}

export default Preloader
