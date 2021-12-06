import React from 'react'
import Head from 'next/head'
import MyTimeline from 'components/MyTimeline'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>My Timeline</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-start w-full flex-1 px-20 text-center bg-gray-50 max-w-7xl">
        <MyTimeline />
      </main>
    </div>
  )
}
