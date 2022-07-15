import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>EasyVet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Bienvenidos a EasyVet!" />
        <p className="description">
          Empezamos a hacer codigo<code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
