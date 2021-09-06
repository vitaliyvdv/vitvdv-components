import React from "react"

import { RadioButton } from "components/common/inputs"

export default {
  title: "Inputs/RadioButton",
  component: RadioButton
}

const Template = args => <RadioButton {...args} />

export const Default = Template.bind({})
Default.args = {
  label: "Lorem ipsum"
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: "Lorem ipsum",
  disabled: true
}

export const Error = Template.bind({})
Error.args = {
  label: "Lorem ipsum",
  error: "error text"
}
