import React from "react"

import { AppGlobalStyles } from "src/styles"
import { TextField } from "src/components"

import PreloaderSVG from "src/static/images/svg/preloader.svg"

export default {
  title: "Inputs/TextField",
  component: TextField
}

const Template = args => (
  <>
    <AppGlobalStyles />
    <TextField {...args} />
  </>
)

export const Default = Template.bind({})
Default.args = {
  label: "Lorem ipsum",
  placeholder: "Lorem ipsum"
}

export const StartIcon = Template.bind({})
StartIcon.args = {
  label: "Lorem ipsum",
  placeholder: "Lorem ipsum",
  startIcon: PreloaderSVG
}

export const EndIcon = Template.bind({})
EndIcon.args = {
  label: "Lorem ipsum",
  placeholder: "Lorem ipsum",
  endIcon: PreloaderSVG
}

export const TextPrepend = Template.bind({})
TextPrepend.args = {
  label: "Lorem ipsum",
  placeholder: "Lorem ipsum",
  textPrepend: "Some text"
}

export const TextAppend = Template.bind({})
TextAppend.args = {
  label: "Lorem ipsum",
  placeholder: "Lorem ipsum",
  textAppend: "some text"
}

export const Error = Template.bind({})
Error.args = {
  label: "Lorem ipsum",
  placeholder: "Lorem ipsum",
  error: "Error text"
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: "Lorem ipsum",
  placeholder: "Lorem ipsum",
  disabled: true
}
