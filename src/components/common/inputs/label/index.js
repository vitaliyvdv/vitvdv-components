import React from "react"
import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"

import Text from "src/components/common/text"
import Icon from "src/components/common/icon"
import AppTooltip from "src/components/common/tooltip"

import TooltipInfoIcon from "src/images/svg/tooltip/info.svg"

const StyledLabel = styled(Text)(() => [tw`inline-block font-semibold cursor-default select-none`])

const StyledLabelText = styled.span(({ tooltip, disabled }) => [
  tooltip && tw`align-middle mr-1`,
  disabled && tw`opacity-40`
])

const StyledLabelTooltip = styled(AppTooltip)(() => [tw`align-middle text-0 leading-0`])

const StyledLabeTooltiplIcon = styled(Icon)(({ tooltip, disabled }) => [tw`text-black text-opacity-65`])

const Label = ({ label, disabled, htmlFor, onClick, tooltip, children, size, ...rest }) => {
  return (
    <StyledLabel forwardedAs='label' size={size} htmlFor={htmlFor} onClick={onClick} {...rest}>
      <StyledLabelText tooltip={tooltip} disabled={disabled}>
        {label}
      </StyledLabelText>

      {tooltip && (
        <StyledLabelTooltip content={tooltip}>
          <StyledLabeTooltiplIcon size={size} icon={TooltipInfoIcon} />
        </StyledLabelTooltip>
      )}

      {children && <div>{children}</div>}
    </StyledLabel>
  )
}

Label.propTypes = {
  htmlFor: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "base", "lg", "xl"])
}

Label.defaultProps = {
  size: "sm"
}

export default Label
