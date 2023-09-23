import '../styles/globals.css'
import Navbar from './components/navbar'
import React from 'react'
import Footer from './components/footer'
import {Inter} from '@next/font/google'
import CookieConsent from './components/cookieConsent'
import Head from './head'
import {Metadata} from 'next'
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
})
export const metadata: Metadata = {
    title: 'Kung Fu Komplett',
    description:
        'Effektive Selbstverteidigung, Shaolin Kung Fu & Tai Chi Chuan in Berlin',
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png'
    }
}

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html>
            {/* <Head /> */}
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
