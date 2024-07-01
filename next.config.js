/** @type {import('next').NextConfig} */

const nextConfig = {
  distDir: "out",
  output: "export",
  reactStrictMode: false,
  images: {
    unoptimized: true
  },
  transpilePackages: ["@codetrix-studio/capacitor-google-auth", "react-sqlite-hook"],
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback.fs = false
      config.resolve.fallback.tls = false
      config.resolve.fallback.net = false
      config.resolve.fallback.child_process = false
    }

    config.module.rules.push({
      test: /\.svg$/,
      issuer: { and: [/\.(js|ts)x?$/] },
      use: ["@svgr/webpack"]
    })
    return config
  }
}

module.exports = nextConfig
