import Reviews from 'components/block/Reviews'
import Spinner from 'components/atom/Spinner'
import type { NextPage } from 'next'
import Head from 'next/head'
import Suspense from 'components/atom/Suspense'

const Home: NextPage = ({}) => {
  return (
    <>
      <Head>
        <title>MSW NextJS React-Query</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Suspense fallback={<Spinner />}>
        <Reviews />
      </Suspense>
    </>
  )
}

export default Home

// export async function getServerSideProps() {
//   // Server-side requests are mocked by `mocks/server.js`.
//   const queryClient = new QueryClient()
//   await queryClient.prefetchQuery('book', () =>
//     fecther('https://my.backend/book')
//   )

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   }
// }
