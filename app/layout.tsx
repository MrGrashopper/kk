import '../styles/globals.css'
import Navbar from './components/navbar'
import React from 'react'
import Footer from './components/footer'
import {Inter} from '@next/font/google'
import NavbarDrawerItems from './components/navbarDrawerItems'
import CookieConsent from './components/cookieConsent'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
})

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html>
            <head />
            <body className={`${inter.variable} font-sans`}>
                <Navbar />
                <div style={{height: '5rem'}} />
                {children}
                <Footer />
                <CookieConsent />
                {/* <div className="drawer drawer-start">
                    <input
                        id="my-drawer-4"
                        type="checkbox"
                        className="drawer-toggle"
                    />
                    <div className="drawer-content">
                        <Navbar />
                        <div style={{height: '5rem'}} />
                        {children}
                        <Footer />
                        <CookieConsent />
                    </div>
                    <div className="drawer-side">
                        <label
                            htmlFor="my-drawer-4"
                            className="drawer-overlay"></label>
                        <NavbarDrawerItems />
                    </div>
                </div> */}
            </body>
        </html>
    )
}
