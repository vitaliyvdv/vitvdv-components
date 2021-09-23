import React, { forwardRef } from "react"
import PropTypes from "prop-types"

import Button from "./Button"

const IconButton = forwardRef(({ color, variant, size, href, disabled, startIcon, endIcon, ...rest }, ref) => {
  return (
    <Button
      onlyIcon
      size={size}
      color={color}
      variant={variant}
      href={href}
      ref={ref}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      {...rest}
    />
  )
})

IconButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["sm", "base", "lg", "xl"]),
  variant: PropTypes.oneOf(["text", "contained", "outlined"]),
  disabled: PropTypes.bool
}

IconButton.defaultProps = {
  color: "primary",
  variant: "contained",
  size: "base",
  disabled: false
}

export default IconButton
