import React from "react"

import { AppGlobalStyles } from "src/styles"
import { IconButton } from "src/components"

import PreloaderSVG from "src/static/images/svg/preloader.svg"

export default {
  title: "Inputs/IconButton",
  component: IconButton
}

const Template = args => (
  <>
    <AppGlobalStyles />
    <IconButton {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
  color: "primary",
  startIcon: PreloaderSVG
}
