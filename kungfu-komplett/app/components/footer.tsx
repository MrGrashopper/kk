import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content mt-10">
            <div>
                <span className="footer-title">Info</span>
                <a className="link link-hover" href={'/terms'}>
                    Datenschutzerklärung
                </a>
            </div>
        </footer>
    )
}

export default Footer
