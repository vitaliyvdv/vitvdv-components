import React from "react"
import PropTypes from "prop-types"
import loadable from "@loadable/component"

import tw, { styled } from "twin.macro"
import { createGlobalStyle } from "styled-components"

const Tooltip = loadable(() => import("react-tooltip-lite"))

const GlobalStyle = createGlobalStyle`
  .react-tooltip-lite {
    max-width: 320px;
    ${tw`bg-black text-sm leading-normal font-normal text-white rounded p-4`};

    & > * {
      font: inherit;
      ${tw`text-current`}
      &:not(:last-child) {
        margin: 0 0 1.25em;
      }
    }

    ul {
      padding: 0;
      list-style: none;

      li {
        ${tw`flex items-start`}

        &:before {
          ${tw`block rounded-full`}
          content: "";
          width: 6px;
          height: 6px;
          margin: 8px 8px 0 0;
          background-color: currentColor;
        }
      }
    }

    &-arrow {
      ${tw`border-black`}
    }
  }
`

const StyledTooltip = styled(Tooltip)(({}) => [tw`inline-block`])

const AppTooltip = ({ tagName, children, content, ...rest }) => {
  return (
    <>
      {content ? (
        <>
          <GlobalStyle />
          <StyledTooltip tagName={tagName} tipContentClassName='tooltip' content={content} {...rest}>
            {children}
          </StyledTooltip>
        </>
      ) : (
        <>{children}</>
      )}
    </>
  )
}

AppTooltip.propTypes = {
  content: PropTypes.node,
  tagName: PropTypes.string
}

export default AppTooltip
