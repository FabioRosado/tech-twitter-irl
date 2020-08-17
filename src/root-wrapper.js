import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Layout } from './components/layout'
import { H1, H2, P } from './components/page-elements'
import { GlobalStyle, theme } from './theme/global-style'

const components = {
  h1: props => <H1 {...props} />,
  h2: props => <H2 {...props} />,
  p: props => <P {...props} />,
}

export const wrapPageElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <MDXProvider components={components}>
      <Layout>{element}</Layout>
    </MDXProvider>
  </ThemeProvider>
)
