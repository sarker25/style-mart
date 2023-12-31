import ReactProvider from '../redux/Provider'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Style Mart',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>  
        <ReactProvider>
          {children}
        </ReactProvider>
        </body>
    </html>
  )
}
