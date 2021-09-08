import React from "react"

import { Button } from "src/components/common/inputs"

import PreloaderSVG from "src/images/svg/preloader.svg"

export default {
  title: "Inputs/Button",
  component: Button
}

const Template = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  color: "primary",
  children: "Button"
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: "secondary",
  children: "Button"
}

export const StartIcon = Template.bind({})
StartIcon.args = {
  color: "primary",
  children: "Button",
  startIcon: PreloaderSVG
}

export const EndIcon = Template.bind({})
EndIcon.args = {
  color: "primary",
  children: "Button",
  endIcon: PreloaderSVG
}
