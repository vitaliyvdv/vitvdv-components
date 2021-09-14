import React from "react"
import { action } from "@storybook/addon-actions"

import { AppGlobalStyles } from "src/styles"
import { RadioButtonList, RadioButton } from "src/components"

export default {
  title: "Inputs/RadioButtonList",
  component: RadioButtonList
}

const radioValues = {
  "Label text 1": "value 1",
  "Label text 2": "value 2",
  "Label text 3": "value 3"
}

const Template = args => (
  <>
    <AppGlobalStyles />
    <RadioButtonList onChange={action("selected")} {...args}>
      {Object.entries(radioValues).map((item, i) => (
        <RadioButton key={i} label={item[0]} value={item[1]} className='mr-3' />
      ))}
    </RadioButtonList>
  </>
)

export const Default = Template.bind({})
Default.args = {
  name: "test",
  label: "Lorem ipsum"
}

export const Disabled = Template.bind({})
Disabled.args = {
  name: "test",
  label: "Lorem ipsum",
  disabled: true
}

export const Error = Template.bind({})
Error.args = {
  name: "test",
  label: "Lorem ipsum",
  error: "Error text"
}

export const Horizontal = Template.bind({})
Horizontal.args = {
  name: "test",
  horizontal: true
}
