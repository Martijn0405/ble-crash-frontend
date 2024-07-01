import { CapacitorConfig } from "@capacitor/cli"

const config: CapacitorConfig = {
  appId: "Crash Test",
  appName: "Crash Test",
  webDir: "out",
  server: {
    hostname: "localhost:3000",
    androidScheme: "http"
  },
  android: {
    flavor: "release"
  },
  ios: {
    scheme: "release"
  },
  plugins: {
    GoogleAuth: {
      scopes: ["profile", "email"],
      androidClientId: process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID,
      clientId: process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID,
      serverClientId: process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID,
      forceCodeForRefreshToken: true
    },
    CapacitorSQLite: {
      iosDatabaseLocation: "Library/CapacitorDatabase",
      iosIsEncryption: true,
      iosKeychainPrefix: "crashtest",
      iosBiometric: {
        biometricAuth: false,
        biometricTitle: "Biometric login for database"
      },
      androidIsEncryption: true,
      androidBiometric: {
        biometricAuth: false,
        biometricTitle: "Biometric login for database",
        biometricSubTitle: "Log in using your biometric"
      },
      electronIsEncryption: true,
      electronWindowsLocation: "C:\\ProgramData\\CapacitorDatabases",
      electronMacLocation: "/Volumes/Development_Lacie/Development/Databases",
      electronLinuxLocation: "Databases"
    }
  }
}

export default config
