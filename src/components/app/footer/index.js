import tw, { styled } from "twin.macro"

import { useTranslation } from "next-i18next"

import Container from "root/src/components/common/container"

const StyledFooter = styled.footer(({}) => [tw`flex-grow-0 flex-shrink-0`])

const Footer = ({ ...rest }) => {
  const { t } = useTranslation("common")

  return (
    <StyledFooter {...rest}>
      <Container>{t("test")}</Container>
    </StyledFooter>
  )
}

export default Footer
