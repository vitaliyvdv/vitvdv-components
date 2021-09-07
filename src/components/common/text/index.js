import React from "react"
import PropTypes from "prop-types"

import tw, { styled, css } from "twin.macro"

const mainStyles = css`
  & {
    p {
      font: inherit;
      margin: 0;

      &:not(:last-child) {
        margin-bottom: 1.25em;
      }
    }

    & > * {
      margin-bottom: 1.25em;

      &:last-child {
        margin-bottom: 0;
      }
    }

    ul,
    ol {
      font: inherit;

      * + & {
        margin-top: 1.25em;
        margin-bottom: 1.25em;
      }
    }

    ul {
      padding: 0;
      list-style: none;

      li {
        position: relative;
        padding: 0 0 0 18px;

        &:before {
          ${tw`block absolute bg-primary rounded-full`};
          content: "";
          top: 9px;
          left: 0;
          width: 6px;
          height: 6px;
        }
      }
    }

    ol {
      padding: 0;
      list-style: none;

      li {
        counter-increment: custom-counter;

        &:before {
          content: counter(custom-counter) ".";
          ${tw`text-primary font-semibold`};
          margin: 0 12px 0 0;
        }
      }
    }
  }
`

const StyledText = styled.div(({ size }) => [
  size === "xs" && tw`text-xs`,
  size === "sm" && tw`text-sm`,
  size === "base" && tw`text-base`,
  size === "lg" && tw`text-lg`,
  mainStyles
])

const Text = ({ size, children, ...rest }) => {
  return (
    <StyledText size={size} {...rest}>
      {children}
    </StyledText>
  )
}

Text.propTypes = {
  size: PropTypes.oneOf(["xs", "sm", "base", "lg"]),
  children: PropTypes.node
}

Text.defaultProps = {
  size: "base"
}

export default Text
