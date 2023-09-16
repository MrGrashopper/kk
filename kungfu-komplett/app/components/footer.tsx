import React from 'react'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content mt-10">
            <div>
                <span className="footer-title">Info</span>
                <a className="link link-hover" href={'/terms'}>
                    Datenschutzerklärung
                </a>
                <a className="link link-hover" href={'/imprint'}>
                    Impressum
                </a>
            </div>
        </footer>
    )
}

export default Footer
