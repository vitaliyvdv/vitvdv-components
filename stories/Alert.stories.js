import React from "react"

import Alert from "src/components/common/alert"

export default {
  title: "Common/Alert",
  component: Alert
}

const Template = args => <Alert {...args} />

export const Default = Template.bind({})
Default.args = {
  title: "Lorem ipsum",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}
