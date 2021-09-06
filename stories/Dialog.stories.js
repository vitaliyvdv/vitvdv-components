import React, { Fragment } from "react"

import { Dialog, DialogActions, DialogContent, DialogTitle } from "components/common/dialog"
import { Button } from "components/common/inputs"

export default {
  title: "Common/Dialog",
  component: Dialog,
  subcomponents: [Button]
}

const Template = args => (
  <Fragment>
    <Button>Open</Button>
    <Dialog {...args}>
      <DialogTitle title='Lorem ipsum' />
      <DialogContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </DialogContent>
      <DialogActions>
        <Button>Close</Button>
      </DialogActions>
    </Dialog>
  </Fragment>
)

export const Default = Template.bind({})
Default.args = {
  isOpen: true
}

export const FullScreen = Template.bind({})
FullScreen.args = {
  isOpen: true,
  fullScreen: true
}
