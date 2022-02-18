import React from "react"

import { AppGlobalStyles } from "src/styles"
import { Range } from "src/components"

export default {
  title: "Common/Range",
  component: Range
}

const Template = args => (
  <>
    <AppGlobalStyles />
    <div className='flex'>
      <Range {...args} />
    </div>
  </>
)

export const Default = Template.bind({})
Default.args = {
  orientation: "horizontal"
}
