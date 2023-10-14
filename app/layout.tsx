'use client'
import '../styles/globals.css'
import Navbar from './components/navbar'
import React, {useEffect, useState} from 'react'
import Footer from './components/footer'
import {Inter} from '@next/font/google'
import CookieConsent from './components/cookieConsent'
import Head from './head'
import {usePathname} from 'next/navigation'
import NavbarMember from './components/navbarMember'
import {LoadingSpinner} from './member/components/loadingSpinner'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
})

export type Theme = 'dark' | 'lofi'

export const useIsLoading = () => {
    const [isLoading, setLoading] = useState(true)

    return {
        isLoading,
        setLoading
    }
}

export default function RootLayout({children}: {children: React.ReactNode}) {
    const currentURL = usePathname()
    const isMemberPage = currentURL?.startsWith('/member')
    const [theme, setTheme] = useState<Theme>('dark')
    const {isLoading, setLoading} = useIsLoading()

    useEffect(() => {
        const initialTheme =
            (localStorage.getItem('user-theme') as Theme) || 'dark'

        if (theme !== initialTheme) {
            setTheme(initialTheme)
        }
    }, [])

    const switchTheme = (newTheme: Theme) => {
        setTheme(newTheme)
        localStorage.setItem('user-theme', newTheme)
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 400)
    }, [])

    if (isMemberPage) {
        return (
            <html data-theme={theme}>
                <Head />
                <body className={`${inter.variable} font-sans`}>
                    {isLoading ? (
                        <LoadingSpinner />
                    ) : (
                        <>
                            <NavbarMember
                                switchTheme={switchTheme}
                                theme={theme}
                            />
                            <div style={{height: '5rem'}} />
                            {children}
                        </>
                    )}
                </body>
            </html>
        )
    }
    if (!isMemberPage) {
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
