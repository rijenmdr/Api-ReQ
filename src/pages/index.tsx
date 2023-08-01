import Navbar from '@/common/Navbar'
import Head from 'next/head'

import Home from '@/components/Home'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Api Req</title>
        <meta name="description" content="Make api request" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <Home/>
    </>
  )
}
