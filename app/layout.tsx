import '../styles/globals.css'
import Navbar from './components/navbar'
import React from 'react'
import Footer from './components/footer'
import {Inter} from '@next/font/google'
import CookieConsent from './components/cookieConsent'
import Head from './head'
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
})

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html>
            <Head />
            <body className={`${inter.variable} font-sans`}>
                <Navbar />
                <div style={{height: '5rem'}} />
                {children}
                <Footer />
                <CookieConsent />
            </body>
        </html>
    )
}
