import React, { Fragment } from "react"

import Head from "next/head"

import tw, { styled } from "twin.macro"

import Footer from "components/app/footer"

const StyledPageRoot = styled.div(() => [tw`flex flex-col flex-grow flex-shrink-0 w-full overflow-hidden`])

const StyledPageMain = styled.main(() => [tw`flex flex-col flex-grow flex-shrink-0 w-full`])

const StyledPageWrapper = styled.div(() => [tw`flex-grow flex-shrink-0 py-8 w-full`])

const Page = ({ children, title, description }) => {
  return (
    <Fragment>
      <Head key='layoutHead'>
        <meta
          key='viewport'
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1, viewport-fit=cover'
        />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        {title && <title>{title}</title>}
        {description && <meta name='description' content={description} />}
      </Head>
      <StyledPageRoot>
        <StyledPageMain>
          <StyledPageWrapper>{children}</StyledPageWrapper>
        </StyledPageMain>
        <Footer className='text-center' />
      </StyledPageRoot>
    </Fragment>
  )
}

export default Page
