import { Container, Preloader, Text, Button, AppTooltip, TextArea, TextField } from "src/components"
import { AppGlobalStyles } from "src/styles"

function App() {
  return (
    <Container>
      <AppGlobalStyles />
      <Preloader size='xl' />
      <TextField label='test' />
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, erat a consequat posuere, lectus velit
        facilisis mauris, eget auctor purus leo quis metus. Quisque sit amet tempor velit, vitae auctor est. Donec in
        auctor tortor, eu aliquet velit. Donec a felis a elit tincidunt imperdiet a eget odio. Integer facilisis ante et
        nulla iaculis rutrum. Donec vulputate at nunc non hendrerit. In hac habitasse platea dictumst. Etiam ante mi,
        tincidunt malesuada lobortis at, suscipit eget mauris. Praesent vel fringilla nulla. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas. Nam facilisis lorem nec urna venenatis
        vehicula. Nunc nec enim nisi. Curabitur vehicula purus libero, eu commodo ante euismod sit amet.
      </Text>
      <TextArea label='Textarea label' />
      <AppTooltip content='lorem ipsum'>
        <Button>Test Button</Button>
      </AppTooltip>
    </Container>
  )
}

export default App
