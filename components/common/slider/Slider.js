import React, { useEffect, useRef } from "react"

import tw, { styled, css } from "twin.macro"
import { createGlobalStyle } from "styled-components"

import Swiper from "swiper"

const GlobalStyleCore = createGlobalStyle`
  .swiper-container {
    ${tw`relative mx-auto p-0 overflow-hidden list-none w-full`};
    /* Fix of Webkit flickering */
    z-index: 1;
  }
  .swiper-container-vertical > .swiper-wrapper {
    ${tw`flex-col`}
  }

  .swiper-wrapper {
    ${tw`flex relative w-full h-full box-content`};
    z-index: 1;
    transition-property: transform;
  }

  .swiper-container-android .swiper-slide,
  .swiper-wrapper {
    transform: translate3d(0px, 0, 0);
  }

  .swiper-container-multirow > .swiper-wrapper {
    ${tw`flex-wrap`};
  }

  .swiper-container-multirow-column > .swiper-wrapper {
    ${tw`flex-wrap flex-col`};
  }

  .swiper-container-free-mode > .swiper-wrapper {
    transition-timing-function: ease-out;
    ${tw`my-0 mx-auto`};
  }

  .swiper-container-pointer-events {
    touch-action: pan-y;

    &.swiper-container-vertical {
      touch-action: pan-x;
    }
  }

  .swiper-slide {
    ${tw`relative w-full h-full flex-shrink-0`};
    transition-property: transform;
  }

  .swiper-slide-invisible-blank {
    ${tw`invisible`};
  }

  /* Auto Height */
  .swiper-container-autoheight {
    &,
    .swiper-slide {
      ${tw`h-auto`};
    }

    .swiper-wrapper {
      ${tw`items-start`};
      transition-property: transform, height;
    }
  }

  /* 3D Effects */
  .swiper-container-3d {
    perspective: 1200px;

    .swiper-wrapper,
    .swiper-slide,
    .swiper-slide-shadow-left,
    .swiper-slide-shadow-right,
    .swiper-slide-shadow-top,
    .swiper-slide-shadow-bottom,
    .swiper-cube-shadow {
      transform-style: preserve-3d;
    }

    .swiper-slide-shadow-left,
    .swiper-slide-shadow-right,
    .swiper-slide-shadow-top,
    .swiper-slide-shadow-bottom {
      ${tw`absolute top-0 left-0 w-full h-full pointer-events-none`};
      z-index: 10;
    }

    .swiper-slide-shadow-left {
      background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
    }

    .swiper-slide-shadow-right {
      background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
    }

    .swiper-slide-shadow-top {
      background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
    }

    .swiper-slide-shadow-bottom {
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
    }
  }

  /* CSS Mode */
  .swiper-container-css-mode {
    > .swiper-wrapper {
      overflow: auto;
      scrollbar-width: none; /* For Firefox */
      -ms-overflow-style: none; /* For Internet Explorer and Edge */

      &::-webkit-scrollbar {
        display: none;
      }
    }
    > .swiper-wrapper > .swiper-slide {
      scroll-snap-align: start start;
    }
  }

  .swiper-container-horizontal.swiper-container-css-mode {
    > .swiper-wrapper {
      scroll-snap-type: x mandatory;
    }
  }

  .swiper-container-vertical.swiper-container-css-mode {
    > .swiper-wrapper {
      scroll-snap-type: y mandatory;
    }
  }
`

const Slider = ({ children, settings, ...rest }) => {
  const sliderRef = useRef(null)

  useEffect(() => {
    const SwiperSlider = new Swiper(sliderRef.current, settings)

    return () => {
      SwiperSlider.destroy(true, true)
    }
  }, [])

  return (
    <>
      <GlobalStyleCore />
      <div className='swiper-container' ref={sliderRef} {...rest}>
        {children}
      </div>
    </>
  )
}

export default Slider
