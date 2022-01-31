import React from "react"
import {
  Container,
  Preloader,
  Text,
  Button,
  AppTooltip,
  TextArea,
  TextField,
  Fieldset,
  FieldValidation
} from "src/components"
import { Form, Formik } from "formik"
import * as Yup from "yup"

import { AppGlobalStyles } from "src/styles"

const SignupSchema = Yup.object().shape({
  login: Yup.string().min(2, "Too Short!").max(12, "Too Long!").required("Required"),
  password: Yup.string().min(2, "Too Short!").max(12, "Too Long!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required")
})

function App() {
  return (
    <Container>
      <AppGlobalStyles />
      <Preloader size='xl' />
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, erat a consequat posuere, lectus velit
        facilisis mauris, eget auctor purus leo quis metus. Quisque sit amet tempor velit, vitae auctor est. Donec in
        auctor tortor, eu aliquet velit. Donec a felis a elit tincidunt imperdiet a eget odio. Integer facilisis ante et
        nulla iaculis rutrum. Donec vulputate at nunc non hendrerit. In hac habitasse platea dictumst. Etiam ante mi,
        tincidunt malesuada lobortis at, suscipit eget mauris. Praesent vel fringilla nulla. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas. Nam facilisis lorem nec urna venenatis
        vehicula. Nunc nec enim nisi. Curabitur vehicula purus libero, eu commodo ante euismod sit amet.
      </Text>
      <Formik
        initialValues={{ login: "", password: "", email: "" }}
        validationSchema={SignupSchema}
        validateOnBlur={true}
        validateOnChange={true}
        validateOnMount={true}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
          }, 1000)
        }}
      >
        {({ props, isSubmitting }) => (
          <Form noValidate>
            <Fieldset>
              <FieldValidation name='login' label='Login' component={TextField} />

              <FieldValidation name='email' label='Email' type='email' component={TextField} />

              <FieldValidation name='password' label='Password' type='password' component={TextField} />

              <TextArea label='Textarea label' />

              <div>
                <AppTooltip content='lorem ipsum'>
                  <Button type='submit' disabled={isSubmitting}>
                    Send
                  </Button>
                </AppTooltip>
              </div>
            </Fieldset>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default App
