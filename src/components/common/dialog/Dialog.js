import React, { useState, useEffect, useRef, forwardRef } from "react"
import PropTypes from "prop-types"

import tw, { styled, css } from "twin.macro"
import { motion, AnimatePresence } from "framer-motion"

const StyledDialog = styled(motion.div)(({ fullScreen }) => [
  tw`flex fixed top-0 left-0 h-full w-full bg-black bg-opacity-75`,
  `z-index: 1000;`,
  // `backdrop-filter: blur(8px);`,

  !fullScreen && tw`items-center justify-center p-6`,
  fullScreen && tw`items-stretch`
])

const StyledDialogContainerCSS = ({ fullScreen }) => css`
  ${tw`flex flex-col bg-white w-full relative outline-none`};
  ${!fullScreen && tw`max-h-full rounded`};
`

const StyledDialogContainer = styled(motion.div)(({}) => [StyledDialogContainerCSS])

const StyledDialogContainerFullScreen = styled.div(({}) => [StyledDialogContainerCSS])

const variants = {
  enter: { opacity: 0 },
  open: duration => {
    return {
      opacity: 1,
      transition: { opacity: { ease: "easeOut", duration: duration / 1000, delay: 0 } }
    }
  },
  exit: duration => {
    return {
      opacity: 0,
      transition: { opacity: { ease: "easeOut", duration: duration / 1000, delay: 0 } }
    }
  }
}

const container = {
  enter: { transform: "scale(0.96)" },
  open: duration => {
    return {
      transform: "scale(1)",
      transition: { transform: { ease: "easeOut", duration: duration / 1000, delay: 0 } }
    }
  },
  exit: duration => {
    return {
      transform: "scale(0.96)",
      transition: { transform: { ease: "easeOut", duration: duration / 1000, delay: 0 } }
    }
  }
}

const DialogContainer = forwardRef(({ fullScreen, children, duration, isOpen, ...rest }, ref) => {
  const props = {
    ref: ref,
    fullScreen: fullScreen,
    tabIndex: "0",
    role: "dialog",
    "aria-labelledby": "dialog_label",
    "aria-describedby": "dialog_desc",
    "aria-modal": "true"
  }

  return !fullScreen ? (
    <StyledDialogContainer
      {...props}
      {...rest}
      variants={container}
      custom={duration}
      initial='enter'
      animate={isOpen ? "open" : "exit"}
    >
      {children}
    </StyledDialogContainer>
  ) : (
    <StyledDialogContainerFullScreen {...props} {...rest}>
      {children}
    </StyledDialogContainerFullScreen>
  )
})

const Dialog = ({ children, isOpen, fullScreen, onClose, duration, ...rest }) => {
  const [open, setOpen] = useState(isOpen)
  const dialogContainer = useRef(null)

  const DialogFocus = () => {
    open && dialogContainer.current && setTimeout(() => dialogContainer.current.focus(), duration + 200)
  }

  useEffect(() => {
    isOpen ? setOpen(isOpen) : setTimeout(() => setOpen(false), duration)
  }, [isOpen])

  useEffect(() => {
    DialogFocus()
  }, [open])

  return (
    <>
      {open && (
        <AnimatePresence>
          <StyledDialog
            fullScreen={fullScreen}
            variants={variants}
            custom={duration}
            initial='enter'
            animate={isOpen ? "open" : "exit"}
            onClick={() => {
              onClose && onClose()
            }}
          >
            <DialogContainer
              fullScreen={fullScreen}
              ref={dialogContainer}
              duration={duration}
              isOpen={isOpen}
              onClick={e => e.stopPropagation()}
              {...rest}
            >
              {children}
            </DialogContainer>
          </StyledDialog>
        </AnimatePresence>
      )}
    </>
  )
}

Dialog.propTypes = {
  duration: PropTypes.number,
  fullScreen: PropTypes.bool
}

Dialog.defaultProps = {
  duration: 300,
  fullScreen: false
}

export default Dialog
