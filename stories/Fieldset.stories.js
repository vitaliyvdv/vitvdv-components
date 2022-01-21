import React from "react"
import { action } from "@storybook/addon-actions"

import { AppGlobalStyles } from "src/styles"
import { Fieldset, TextField, Button } from "src/components"

export default {
  title: "Inputs/Fieldset",
  component: Fieldset
}

const Template = args => (
  <>
    <AppGlobalStyles />
    <Fieldset {...args}>
      <TextField label='Lorem ipsum' placeholder='Lorem ipsum' onChange={action("input text 1")} />
      <TextField label='Lorem ipsum' placeholder='Lorem ipsum' onChange={action("input text 2")} />
      <Button onClick={action("button")}>Button</Button>
    </Fieldset>
  </>
)

export const Default = Template.bind({})
Default.args = {}
