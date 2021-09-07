import React, { useState } from "react"

import tw, { styled, css } from "twin.macro"

const Accordion = ({ children }) => {
  const [expanded, setExpanded] = useState(false)
  return <div role='list'>{children}</div>
}

export default Accordion
