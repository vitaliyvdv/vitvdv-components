import React from "react"

import { AppGlobalStyles } from "src/styles"
import { TextArea } from "src/components"

export default {
  title: "Inputs/TextArea",
  component: TextArea
}

const Template = args => (
  <>
    <AppGlobalStyles />
    <TextArea {...args} />
  </>
)

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
