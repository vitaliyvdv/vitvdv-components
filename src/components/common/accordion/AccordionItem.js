import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"

import tw, { styled, css } from "twin.macro"
import { motion, AnimatePresence } from "framer-motion"

const StyledAccordionItem = styled.section(({ isOpen }) => [
  tw`p-2 border rounded`,
  !isOpen && tw`border-gray`,
  isOpen && tw`border-primary`
])

const StyledAccordionTitle = styled.h5(({}) => [tw`flex outline-none`])

const StyledAccordionContainer = styled(motion.div)(({}) => [tw`flex outline-none`])

const rootAnimation = {
  open: duration => {
    return {
      opacity: 1,
      height: "auto",
      transition: {
        opacity: { ease: "easeOut", duration: duration / 1000, delay: 0 },
        height: { ease: "easeOut", duration: duration / 1000, delay: 0 }
      }
    }
  },
  collapsed: duration => {
    return {
      opacity: 0,
      height: 0,
      transition: {
        opacity: { ease: "easeOut", duration: duration / 1000, delay: 0 },
        height: { ease: "easeOut", duration: duration / 1000, delay: 0 }
      }
    }
  }
}

const containerAnimation = {
  open: duration => {
    return {
      visibility: "visible",
      transition: {
        visibility: { ease: "easeOut", duration: duration / 1000, delay: 0 }
      }
    }
  },
  collapsed: duration => {
    return {
      visibility: "visible",
      transition: {
        visibility: { ease: "easeOut", duration: duration / 1000, delay: 0.6 }
      }
    }
  }
}

const AccordionItem = ({ i, expanded, setExpanded, title, children, duration }) => {
  const isOpen = i === expanded
  const refContainer = useRef(null)

  useEffect(() => {
    isOpen ? refContainer.current.focus() : null
  }, [isOpen])

  return (
    <StyledAccordionItem role='listitem' isOpen={isOpen}>
      <StyledAccordionTitle
        id={`accordion${i}id`}
        role='button'
        aria-expanded={isOpen ? "true" : "false"}
        aria-disabled={isOpen ? "false" : null}
        aria-controls={`sect${i}`}
        tabIndex='0'
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        {title}
      </StyledAccordionTitle>
      <AnimatePresence>
        <StyledAccordionContainer
          ref={refContainer}
          id={`sect${i}`}
          role='region'
          aria-labelledby={`accordion${i}id`}
          tabIndex='-1'
          className='overflow-hidden'
          variants={rootAnimation}
          custom={duration}
          initial={false}
          animate={isOpen ? "open" : "collapsed"}
        >
          <motion.div animate={isOpen ? "open" : "collapsed"} custom={duration} variants={containerAnimation}>
            {children}
          </motion.div>
        </StyledAccordionContainer>
      </AnimatePresence>
    </StyledAccordionItem>
  )
}

AccordionItem.propTypes = {
  duration: PropTypes.number
}

AccordionItem.defaultProps = {
  duration: 300
}

export default AccordionItem
