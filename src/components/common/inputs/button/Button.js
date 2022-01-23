import React, { Fragment, forwardRef } from "react"
import PropTypes from "prop-types"
import loadable from "@loadable/component"

import tw, { styled, css } from "twin.macro"

const Preloader = loadable(() => import("src/components/common/preloader"))
import IconSVG from "src/components/common/icon"

const StyledButtonContained = ({ color }) => css`
  ${tw`border-solid`}
  ${color === "primary" && tw`bg-primary border-primary text-white`};
  ${color === "secondary" && tw`bg-secondary border-secondary text-white`};

  &:hover,
  &:active,
  &:focus {
    ${color === "primary" && tw`bg-primary-light border-primary-light text-white`};
    ${color === "secondary" && tw`bg-secondary-light border-secondary-light text-white`};
  }

  &:disabled {
    &,
    &:visited,
    &:active,
    &:hover,
    &:focus {
      ${tw`bg-gray-light border-gray-light text-white`}
    }
  }
`

const StyledButtonOutlined = ({ color }) =>
  css`
    ${tw`bg-transparent border-solid`};
    ${color === "primary" && tw`border-primary text-primary`};
    ${color === "secondary" && tw`border-secondary text-secondary`};

    &:hover,
    &:active,
    &:focus {
      ${color === "primary" && tw`bg-primary-light border-primary-light text-white`};
      ${color === "secondary" && tw`bg-secondary-light border-secondary-light text-white`};
    }

    &:disabled {
      &,
      &:visited,
      &:active,
      &:hover,
      &:focus {
        ${tw`bg-transparent border-gray-light text-gray-light`}
      }
    }
  `

const StyledButtonText = ({ color }) => css`
  ${tw`border-none`}
  ${color == "primary" && tw`bg-transparent text-primary`};
  ${color == "secondary" && tw`bg-transparent text-secondary`};

  &:hover,
  &:active,
  &:focus {
    ${color == "primary" && tw`bg-transparent text-primary-light`};
    ${color == "secondary" && tw`bg-transparent text-secondary-light`};
  }

  &:disabled {
    &,
    &:visited,
    &:active,
    &:hover,
    &:focus {
      ${tw`bg-transparent text-gray-light`}
    }
  }
`

const StyledButton = styled.button(({ variant, size, onlyIcon }) => [
  tw`inline-flex items-center relative align-middle text-0 leading-0 select-none outline-none fill-current`,
  tw`cursor-pointer disabled:cursor-not-allowed`,

  variant == "contained" && StyledButtonContained,
  variant == "outlined" && StyledButtonOutlined,
  variant == "text" && StyledButtonText,

  size === "sm" && variant !== "text" && tw`h-sm`,
  size === "base" && variant !== "text" && tw`h-md`,
  size === "lg" && variant !== "text" && tw`h-lg`,
  size === "xl" && variant !== "text" && tw`h-xl`,

  size === "sm" && variant !== "text" && onlyIcon && tw`w-sm`,
  size === "base" && variant !== "text" && onlyIcon && tw`w-md`,
  size === "lg" && variant !== "text" && onlyIcon && tw`w-lg`,
  size === "xl" && variant !== "text" && onlyIcon && tw`w-xl`,

  onlyIcon && tw`flex-shrink-0 rounded-full justify-center`,
  !onlyIcon && variant !== "text" && tw`rounded`,

  size === "sm" && variant !== "text" && !onlyIcon && tw`px-3`,
  size === "base" && variant !== "text" && !onlyIcon && tw`px-4`,
  size === "lg" && variant !== "text" && !onlyIcon && tw`px-5`,
  size === "xl" && variant !== "text" && !onlyIcon && tw`px-6`,

  variant === "text" && tw`bg-transparent border-0 px-0`,
  variant !== "text" && tw`border`,

  `&:hover, &:focus, &:active {outline: none;}`,
  `transition: background-color 0.3s ease 0s, color 0.3s ease 0s, border-color 0.3s ease 0s;`
])

const StyledButtonValue = styled.div(({ size, preloader }) => [
  tw`leading-normal font-semibold`,

  size === "sm" && tw`text-sm`,
  size === "base" && tw`text-base`,
  size === "lg" && tw`text-lg`,
  size === "xl" && tw`text-xl`,

  preloader && tw`invisible`
])

const StyledButtonPreloader = styled(Preloader)(({}) => [tw`absolute top-0 left-0 w-full h-full`])

const StyledIcon = styled(IconSVG)(({ preloader }) => [preloader && tw`invisible`])

const StyledStartIcon = styled(StyledIcon)(() => [tw`mr-2`])

const StyledEndIcon = styled(StyledIcon)(() => [tw`ml-2`])

const Button = forwardRef(
  ({ children, preloader, startIcon, endIcon, size, color, variant, disabled, onlyIcon, ...rest }, ref) => {
    const component = (
      <Fragment>
        {startIcon && <StyledStartIcon size={size} preloader={preloader} icon={startIcon} />}

        <StyledButtonValue size={size} preloader={preloader}>
          {children}
        </StyledButtonValue>

        {endIcon && <StyledEndIcon size={size} preloader={preloader} icon={endIcon} />}
      </Fragment>
    )

    const icon = (
      <>
        {startIcon && <IconSVG size={size} icon={startIcon} />}
        {endIcon && <IconSVG size={size} icon={endIcon} />}
      </>
    )

    return (
      <StyledButton
        size={size}
        color={color}
        variant={variant}
        onlyIcon={onlyIcon}
        preloader={preloader}
        tabIndex='0'
        ref={ref}
        disabled={disabled}
        {...rest}
      >
        {!onlyIcon ? component : icon}
        {preloader && <StyledButtonPreloader size={size} />}
      </StyledButton>
    )
  }
)

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  color: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["sm", "base", "lg", "xl"]),
  variant: PropTypes.oneOf(["text", "contained", "outlined"]),
  disabled: PropTypes.bool,
  onlyIcon: PropTypes.bool,
  preloader: PropTypes.bool
}

Button.defaultProps = {
  color: "primary",
  variant: "contained",
  size: "base",
  disabled: false,
  preloader: false
}

export default Button
