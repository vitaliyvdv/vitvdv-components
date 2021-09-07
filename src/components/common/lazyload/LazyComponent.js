import React, { useState } from "react"
import PropTypes from "prop-types"
import { InView } from "react-intersection-observer"

const LazyComponent = ({ children, rootMargin }) => {
  const [loaded, setloaded] = useState(false)

  return (
    <>
      {!loaded && (
        <InView as='div' triggerOnce={true} rootMargin={rootMargin} onChange={inView => inView && setloaded(true)} />
      )}
      {loaded && children}
    </>
  )
}

LazyComponent.propTypes = {
  rootMargin: PropTypes.string
}

LazyComponent.defaultProps = {
  rootMargin: "250px"
}

export default LazyComponent
