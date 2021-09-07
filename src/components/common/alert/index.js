import PropTypes from "prop-types"
import loadable from "@loadable/component"

import Text from "src/components/common/text"
import Icon from "src/components/common/icon"

import tw, { styled, css } from "twin.macro"

const ErrorIcon = loadable(() => import("src/images/svg/alert/error.svg"))
const WarningIcon = loadable(() => import("src/images/svg/alert/warning.svg"))
const InfoIcon = loadable(() => import("src/images/svg/alert/info.svg"))
const SuccessIcon = loadable(() => import("src/images/svg/alert/success.svg"))

const StyledAlertOutlined = ({ severity }) => css`
  ${tw`border border-2 bg-transparent text-black`}
  ${severity === "error" && tw`border-danger`};
  ${severity === "warning" && tw`border-warning`};
  ${severity === "info" && tw`border-primary`};
  ${severity === "success" && tw`border-cta`};
`

const StyledAlertFilled = ({ severity }) => css`
  ${severity === "error" && tw`bg-danger text-white`};
  ${severity === "warning" && tw`bg-warning text-white`};
  ${severity === "info" && tw`bg-primary text-white`};
  ${severity === "success" && tw`bg-cta text-current`};
`

const StyledAlertSimple = ({ severity }) => css`
  ${severity === "error" && tw`text-danger`};
  ${severity === "warning" && tw`text-warning`};
  ${severity === "info" && tw`text-primary`};
  ${severity === "success" && tw`text-cta`};
`

const StyledAlertIconColor = ({ severity }) => css`
  ${severity === "error" && tw`text-danger`};
  ${severity === "warning" && tw`text-warning`};
  ${severity === "info" && tw`text-primary`};
  ${severity === "success" && tw`text-cta`};
`

const StyledAlert = styled.div(({ variant }) => [
  variant == "outlined" && StyledAlertOutlined,
  variant == "filled" && StyledAlertFilled,
  variant == "simple" && StyledAlertSimple,

  variant != "simple" && tw`rounded p-4`
])

const StyledAlertWrapper = styled.div(({}) => [tw`flex items-start text-0 leading-0`])

const StyledAlertIcon = styled(Icon)(({ variant }) => [
  tw`flex-shrink-0 mr-3`,
  variant == "outlined" && StyledAlertIconColor
])

const StyledAlertTitle = styled(Text)(({}) => [tw`mb-1 font-semibold leading-snug`])

const StyledAlertText = styled(Text)(({}) => [tw`leading-snug`])

const Alert = ({ severity, variant, title, text, ...rest }) => {
  const IconSet = () => {
    switch (true) {
      case severity === "error":
        return <ErrorIcon />
        break
      case severity === "warning":
        return <WarningIcon />
        break
      case severity === "info":
        return <InfoIcon />
        break
      case severity === "success":
        return <SuccessIcon />
        break
      default:
        return <InfoIcon />
    }
  }

  return (
    <div role='alert' {...rest}>
      <StyledAlert severity={severity} variant={variant}>
        <StyledAlertWrapper>
          <StyledAlertIcon variant={variant} severity={severity}>
            {IconSet()}
          </StyledAlertIcon>
          <div>
            {title && <StyledAlertTitle>{title}</StyledAlertTitle>}
            {text && <StyledAlertText size='sm'>{text}</StyledAlertText>}
          </div>
        </StyledAlertWrapper>
      </StyledAlert>
    </div>
  )
}

Alert.propTypes = {
  title: PropTypes.node,
  text: PropTypes.node,
  severity: PropTypes.oneOf(["error", "warning", "info", "success"]),
  variant: PropTypes.oneOf(["outlined", "filled", "simple"])
}

Alert.defaultProps = {
  severity: "info",
  variant: "filled"
}

export default Alert
