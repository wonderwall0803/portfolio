import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import { normalize, style } from 'styles/global'
import MotionWrapper from 'components/common/motionWrapper'
import Header from 'components/common/header';
import Footer from 'components/common/footer';
import Modal from 'components/common/modal'
import { PageWrapper } from 'context/pageContext'


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps, router }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    getLayout(
      <>
        <Global styles={[normalize, style]} />
        <MotionWrapper router={router}>
          <PageWrapper>
            <Modal />
            <Header />
            <Component {...pageProps} />
            <Footer />
          </PageWrapper>
        </MotionWrapper>
      </>
    )
  )
}
