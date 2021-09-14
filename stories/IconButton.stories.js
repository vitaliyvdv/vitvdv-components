import React from "react"

import { IconButton } from "src/components/common/inputs"

import PreloaderSVG from "src/static/images/svg/preloader.svg"

export default {
  title: "Inputs/IconButton",
  component: IconButton
}

const Template = args => <IconButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  color: "primary",
  startIcon: PreloaderSVG
}
