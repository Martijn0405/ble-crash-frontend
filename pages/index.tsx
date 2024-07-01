import { format } from "date-fns"
import Head from "next/head"
import React from "react"

const RootPage = () => {
  return (
    <>
      <Head>
        <title>Crash Test</title>
      </Head>
      Home {format(Date.now(), "yyyy-MM-dd, HH:mm:ss")}
    </>
  )
}

export default RootPage
