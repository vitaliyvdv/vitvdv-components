import React, { useState } from "react"
import PropTypes from "prop-types"

import tw, { styled } from "twin.macro"

import { LazyLoadImage } from "react-lazy-load-image-component"

const StyledLazyImage = styled.div(({ loaded }) => [
  !loaded && tw`opacity-0`,
  loaded && tw`opacity-100`,
  `transition: opacity 0.3s ease 0s;`
])

const LazyImage = ({ src, threshold, ...rest }) => {
  const [loaded, setloaded] = useState(false)

  return (
    <StyledLazyImage loaded={loaded} {...rest}>
      <LazyLoadImage
        threshold={threshold}
        afterLoad={() => setloaded(true)}
        className={className}
        src={src}
        {...rest}
      />
    </StyledLazyImage>
  )
}

LazyImage.propTypes = {
  threshold: PropTypes.number
}

LazyImage.defaultProps = {
  threshold: 200
}

export default LazyImage
