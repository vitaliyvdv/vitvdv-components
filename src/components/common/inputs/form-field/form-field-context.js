import React from "react"

export const FormFieldContext = React.createContext({
  labelClick: () => {},
  inputFocus: () => {},
  element: null,
  focused: false
})
