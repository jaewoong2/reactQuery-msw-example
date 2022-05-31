import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {
  DefaultOptions,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { useState } from 'react'

import { ReactQueryDevtools } from 'react-query/devtools'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../mocks')
}
const defaultOptions: DefaultOptions = {
  queries: {
    staleTime: 1000,
    suspense: true,
  },
}

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient({ defaultOptions }))
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
          <ReactQueryDevtools />
        </Hydrate>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
