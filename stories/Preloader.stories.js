import React from "react"

import Preloader from "src/components/common/preloader"

export default {
  title: "Common/Preloader",
  component: Preloader
}

const Template = args => <Preloader {...args} />

export const Default = Template.bind({})
Default.args = {}

export const Small = Template.bind({})
Small.args = {
  size: "sm"
}

export const Large = Template.bind({})
Large.args = {
  size: "lg"
}

export const ExtraLarge = Template.bind({})
ExtraLarge.args = {
  size: "xl"
}
