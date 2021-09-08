import React from "react"

import { Select } from "src/components/common/inputs"

import PreloaderSVG from "src/images/svg/preloader.svg"

export default {
  title: "Inputs/Select",
  component: Select
}

const Template = args => (
  <Select {...args}>
    <option value='1'>1</option>
    <option value='2'>2</option>
    <option value='3'>3</option>
  </Select>
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
