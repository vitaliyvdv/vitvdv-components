import React from "react"

import { Alert } from "src/components"
import { AppGlobalStyles } from "src/styles"

export default {
  title: "Common/Alert",
  component: Alert
}

const Template = args => (
  <>
    <AppGlobalStyles />
    <Alert {...args} />
  </>
)

export const Default = Template.bind({})
Default.args = {
  title: "Lorem ipsum",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}
