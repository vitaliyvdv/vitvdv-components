import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"

import Text from "src/components/common/text"

const StyledError = styled(Text)(({}) => [tw`text-danger`])

const Error = ({ children, ...rest }) => {
  return (
    <StyledError size='sm' {...rest}>
      {children}
    </StyledError>
  )
}

Error.propTypes = {
  children: PropTypes.node
}

export default Error
