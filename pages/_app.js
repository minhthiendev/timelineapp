import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from 'lib/apollo'

import '../styles/tailwind.scss'

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps)

  return <ApolloProvider client={apolloClient}>
    <Component {...pageProps} />
  </ApolloProvider>
  
}

export default MyApp
