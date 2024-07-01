import Head from "next/head"
import React from "react"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=5, viewport-fit=cover"
          name="viewport"
        />
        <meta content="#000000" name="theme-color" />
        <meta content="BLE crash test on Android" name="description" />

        <meta content="BT Crash" property="og:title" />
        <meta content="BLE crash test on Android" property="og:description" />
        <meta content="/img/banner.png" property="og:image" />
        <meta content="BT Crash" property="og:site_name" />

        <meta content="BT Crash" name="twitter:title" />
        <meta content="BLE crash test on Android" name="twitter:description" />
        <meta content="/img/banner.png" name="twitter:image" />
        <meta content="summary_large_image" name="twitter:card" />

        <meta content="0F13FDC1F856EEC11AEF1C1A0D9B8328" name="msvalidate.01" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
