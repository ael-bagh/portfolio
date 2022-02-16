import Head from 'next/head'
import Nav from './components/Nav'
import Index from './components/Index'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Anas El Baghdadi</title>
        <meta name="Developer portfolio" content="Anas El Baghdadi Dev Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex">
        <Nav />
        <Index />
      </div>
    </div>
  )
}
