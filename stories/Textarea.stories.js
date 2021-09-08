import React from "react"

import { TextArea } from "src/components/common/inputs"

export default {
  title: "Inputs/TextArea",
  component: TextArea
}

const Template = args => <TextArea {...args} />

export const Default = Template.bind({})
Default.args = {
  label: "Lorem ipsum",
  placeholder: "Lorem ipsum"
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
