import React, { useRef } from "react"
import PropTypes from "prop-types"

import tw, { styled } from "twin.macro"

import Button from "src/components/common/inputs/button/Button"

const StyledUpload = styled.div(() => [tw`relative`])

const StyledUploadInput = styled.input(() => [tw`absolute invisible top-0 left-0`])

const Upload = ({ size, color, label, variant, startIcon, endIcon, disabled }) => {
  const inputEl = useRef(null)

  return (
    <StyledUpload>
      <StyledUploadInput ref={inputEl} multiple type='file' />

      <Button
        size={size}
        color={color}
        variant={variant}
        startIcon={startIcon}
        endIcon={endIcon}
        disabled={disabled}
        onClick={() => {
          inputEl.current.click()
        }}
      >
        {label}
      </Button>
    </StyledUpload>
  )
}

Upload.propTypes = {
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  label: PropTypes.node,
  color: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["sm", "base", "lg", "xl"]),
  variant: PropTypes.oneOf(["text", "contained", "outlined"]),
  disabled: PropTypes.bool
}

Upload.defaultProps = {
  color: "primary",
  variant: "contained",
  size: "base",
  label: "Upload",
  disabled: false
}

export default Upload
