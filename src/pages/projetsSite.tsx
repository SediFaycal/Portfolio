import Head from 'next/head'
import { Inter } from 'next/font/google'
import Nav from '@/components/bar/navbar'
import MonBody from '@/components/body'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Porfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <Nav/>
      <MonBody/>
      </main>
    </>
  )
}
