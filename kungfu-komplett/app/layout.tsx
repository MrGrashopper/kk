import '../styles/globals.css'
import Navbar from './components/navbar'
import React from 'react'
import Footer from './components/footer'

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html>
            <head />
            <body>
                <Navbar />
                <div style={{height: '5rem'}}></div>
                <div>{children}</div>
                <Footer />
            </body>
        </html>
    )
}
