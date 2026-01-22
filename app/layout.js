import { Yanone_Kaffeesatz } from "next/font/google";
import { ShoppingCartProvider } from "@/lib/shoppingcart";
import "./globals.css";

export const viewport = {
  themeColor: 'rgb(176, 234, 248)',
}

export const metadata = {
  title: 'AlienShop',
  applicationName: 'AlienShop Example Application',
  description: 'Simple shop frontend application',
  keywords: 'reactjs nextjs canvas e-shop',
  creator: 'devKarin',
  icons: {
    icon: '/lumav_FE_test_02_05_2022/android-chrome-512x512.png',
    shortcut: '/lumav_FE_test_02_05_2022/android-chrome192x192.png',
    apple: '/lumav_FE_test_02_05_2022/apple-touch-icon.png',
  },
  manifest: '/lumav_FE_test_02_05_2022/manifest.json'

}

const kaffeesatz = Yanone_Kaffeesatz({ weight: ["300", "600"], subsets: ["latin"], display: "swap", variable: "--customFontFamily", preload: true })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ShoppingCartProvider>
        <body id="root" className={kaffeesatz.variable}>
          {children}
        </body>
      </ShoppingCartProvider>
    </html>
  );
}
