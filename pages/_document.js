/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from "next/document"
import React from "react"

class MyDocument extends Document {
  render() {
    return (
      <Html className="light" lang="en">
        <Head>
          <link href="/img/logo.png" rel="icon" />

          <link href="https://fonts.googleapis.com" rel="preconnect" />
          <link crossOrigin="true" href="https://fonts.gstatic.com" rel="preconnect" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap"
            rel="stylesheet"
          />

          <link href="/version.json" rel=".json file" />
          <link href="/.well-known/assetlinks.json" rel="assetlinks.json file" />
          <link href="/.well-known/apple-app-site-association" rel="apple-app-site-association file" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
