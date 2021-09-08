import React from "react"

import AppTooltip from "src/components/common/tooltip"

export default {
  title: "Common/Tooltip",
  component: AppTooltip
}

const Template = args => (
  <div className='flex'>
    <AppTooltip {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  children: "Hover me",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}
