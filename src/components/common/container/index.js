import React from "react"
import PropTypes from "prop-types"

import tw, { styled } from "twin.macro"

const StyledContainer = styled.div(({}) => [tw`container`])

const Container = ({ children, ...rest }) => {
  return <StyledContainer {...rest}>{children}</StyledContainer>
}

Container.propTypes = {
  children: PropTypes.node
}

export default Container
