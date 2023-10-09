'use client'
import '../styles/globals.css'
import Navbar from './components/navbar'
import React, {useState} from 'react'
import Footer from './components/footer'
import {Inter} from '@next/font/google'
import CookieConsent from './components/cookieConsent'
import Head from './head'
import {usePathname} from 'next/navigation'
import NavbarMember from './components/navbarMember'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
})

export type Theme = 'dark' | 'lofi'

export default function RootLayout({children}: {children: React.ReactNode}) {
    const currentURL = usePathname()
    const isMemberPage = currentURL?.startsWith('/member')
    const isBrowser = typeof window !== 'undefined'
    const initialTheme = isBrowser
        ? (localStorage.getItem('user-theme') as Theme) || 'dark'
        : 'dark'
    const [theme, setTheme] = useState<Theme>(initialTheme)

    const switchTheme = (newTheme: Theme) => {
        setTheme(newTheme)
        localStorage.setItem('user-theme', newTheme)
    }

    if (isMemberPage) {
        return (
            <html data-theme={theme}>
                <Head />
                <body className={`${inter.variable} font-sans`}>
                    <NavbarMember switchTheme={switchTheme} theme={theme} />
                    <div style={{height: '5rem'}} />
                    {children}
                </body>
            </html>
        )
    } else {
        return (
            <html data-theme="lofi">
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
}
