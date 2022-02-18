import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"

import tw, { styled, css } from "twin.macro"
import { createGlobalStyle } from "styled-components"

import noUiSlider from "nouislider"

const GlobalStyle = createGlobalStyle`
  .noUi-target,
  .noUi-target * {
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    touch-action: none;
    ${tw`select-none outline-none`}
  }

  .noUi-target {
    ${tw`relative`}
  }

  .noUi-base,
  .noUi-connects {
    z-index: 1;
    ${tw`relative w-full h-full cursor-pointer`}
  }

  /* Wrapper for all connect elements.
  */

  .noUi-connects {
    overflow: hidden;
    z-index: 0;
  }

  .noUi-connect,
  .noUi-origin {
    will-change: transform;
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    transform-origin: 0 0;
    transform-style: flat;
  }

  .noUi-connect {
    ${tw`w-full h-full`}
  }

  /* Offset direction
  */

  .noUi-txt-dir-rtl.noUi-horizontal .noUi-origin {
    ${tw`left-0 right-auto`}
  }

  /* Give origins 0 height/width so they don't interfere with clicking the
  * connect elements.
  */

  .noUi-vertical .noUi-origin {
    ${tw`w-full invisible`}
    height: 100%;
  }

  .noUi-horizontal .noUi-origin {
    ${tw`h-full invisible`}
    width: 100%;
  }

  .noUi-handle {
    backface-visibility: hidden;
    ${tw`absolute visible`}
  }

  .noUi-touch-area {
    ${tw`absolute h-8 w-8 top-1/2 left-1/2`}
    transform: translate(-50%, -50%);
  }

  .noUi-state-tap .noUi-connect,
  .noUi-state-tap .noUi-origin {
    transition: transform 0.3s;
  }

  .noUi-state-drag * {
    cursor: inherit !important;
  }

  /* Slider size and handle placement;
  */

  .noUi-horizontal {
    ${tw`h-2`}

    .noUi-handle {
      ${tw`top-1/2 right-0`}
      transform: translate(50%, -50%);
    }
  }

  .noUi-vertical {
    ${tw`w-3`}

    .noUi-handle {
      ${tw`right-1/2 top-0`}
      transform: translate(50%, -50%);
    }
  }

  .noUi-txt-dir-rtl.noUi-horizontal .noUi-handle {
    left: -17px;
    right: auto;
  }

  /* Styling;
  * Giving the connect element a border radius causes issues with using transform: scale
  */

  .noUi-target {
    ${tw`rounded bg-gray`}
  }

  .noUi-connects {
    ${tw`rounded`}
  }

  .noUi-connect {
    ${tw`bg-primary`}
  }

  /* Handles and cursors;
  */

  .noUi-draggable {
    cursor: ew-resize;
  }

  .noUi-vertical .noUi-draggable {
    cursor: ns-resize;
  }

  .noUi-handle {
    &:after {
      ${tw`block relative bg-white rounded-full border-8 border-solid border-primary cursor-pointer w-6 h-6`}
      content: "";
      transition: transform 0.3s ease 0s;
      z-index: 10;
    }

    &.noUi-active {
      outline: none;

      &:after {
        transform: scale(1.25);
      }
    }
  }

  /* Disabled state;
  */

  [disabled] .noUi-connect {
    background: #b8b8b8;
  }

  [disabled].noUi-target,
  [disabled].noUi-handle,
  [disabled] .noUi-handle {
    ${tw`cursor-not-allowed`}
  }

  /* Base;
  *
  */
  .noUi-pips,
  .noUi-pips * {
    ${tw`box-border`}
  }

  .noUi-pips {
    position: absolute;
    color: #999;
  }

  /* Values;
  *
  */

  .noUi-value {
    position: absolute;
    white-space: nowrap;
    text-align: center;
  }

  .noUi-value-sub {
    color: #ccc;
    font-size: 10px;
  }

  .noUi-tooltip {
    ${tw`block absolute rounded bg-black text-white text-xs font-semibold text-center whitespace-nowrap opacity-0 bg-opacity-80 py-1 px-2`};
    transition: opacity 0.3s ease 0s;

    .noUi-active & {
      opacity: 1;
    }
  }
`

const GlobalStyleVertical = createGlobalStyle`
  /* Vertical layout;*/

  .noUi-pips-vertical {
    padding: 0 10px;
    height: 100%;
    top: 0;
    left: 100%;
  }

  .noUi-value-vertical {
    transform: translate(0, -50%);
    padding-left: 25px;
  }

  .noUi-rtl .noUi-value-vertical {
    transform: translate(0, 50%);
  }

  .noUi-marker-vertical.noUi-marker {
    width: 5px;
    height: 2px;
    margin-top: -1px;
  }

  .noUi-marker-vertical.noUi-marker-sub {
    width: 10px;
  }

  .noUi-marker-vertical.noUi-marker-large {
    width: 15px;
  }

  .noUi-tooltip {
    .noUi-vertical & {
      transform: translate(0, -50%);
      top: 50%;
      right: 100%;
      ${tw`mr-2`};
    }

    .noUi-vertical .noUi-origin > & {
      transform: translate(0, -18px);
      top: auto;
      right: 28px;
    }
  }
`

const GlobalStyleHorizontal = createGlobalStyle`
  /* Horizontal layout;*/

  .noUi-pips-horizontal {
    padding: 10px 0;
    height: 80px;
    top: 100%;
    left: 0;
    width: 100%;
  }

  .noUi-value-horizontal {
    transform: translate(-50%, 50%);
  }

  .noUi-rtl .noUi-value-horizontal {
    transform: translate(50%, 50%);
  }

  .noUi-marker-horizontal.noUi-marker {
    margin-left: -1px;
    width: 2px;
    height: 5px;
  }

  .noUi-marker-horizontal.noUi-marker-sub {
    height: 10px;
  }

  .noUi-marker-horizontal.noUi-marker-large {
    height: 15px;
  }

  .noUi-tooltip {
    .noUi-horizontal & {
      transform: translate(-50%, 0);
      left: 50%;
      bottom: 100%;
      ${tw`mb-2`};
    }

    .noUi-horizontal .noUi-origin > & {
      transform: translate(50%, 0);
      left: auto;
      bottom: 10px;
    }
  }
`

const GlobalStyleMarkings = createGlobalStyle`
  /* Markings;*/

  .noUi-marker {
    position: absolute;
    background: #ccc;
  }

  .noUi-marker-sub {
    background: #aaa;
  }

  .noUi-marker-large {
    background: #aaa;
  }
`

const Range = ({ orientation, animate, start, minRange, maxRange, step, tooltips, pips, onChange, ...rest }) => {
  const sliderRef = useRef(null)

  useEffect(() => {
    const slider = sliderRef.current

    noUiSlider.create(slider, {
      orientation: orientation,
      animate: animate,
      start: start,
      connect: start.length > 1 ? true : "lower",
      range: {
        min: minRange,
        max: maxRange
      },
      step: step,
      tooltips: tooltips,
      pips: pips
      // cssPrefix: "",
      // cssClasses: {
      //   base: styles.base,
      //   target: styles.target,
      //   connects: styles.connects
      // }
    })

    slider.noUiSlider.on("change", () => {
      if (onChange) {
        onChange()
      }
    })
  }, [])

  return (
    <>
      <GlobalStyle />
      {orientation == "vertical" && <GlobalStyleVertical />}
      {orientation == "horizontal" && <GlobalStyleHorizontal />}
      {pips && <GlobalStyleMarkings />}
      <div ref={sliderRef} {...rest} />
    </>
  )
}

Range.propTypes = {
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  className: PropTypes.string,
  animate: PropTypes.bool,
  start: PropTypes.array,
  minRange: PropTypes.number,
  maxRange: PropTypes.number,
  step: PropTypes.number,
  tooltips: PropTypes.array
}

Range.defaultProps = {
  orientation: "horizontal",
  animate: true,
  start: [0, 100],
  minRange: 0,
  maxRange: 100,
  step: 1
}

export default Range
