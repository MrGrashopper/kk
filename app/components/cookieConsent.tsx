'use client'
import React, {useState, useEffect} from 'react'

const CookieConsent = () => {
    const [showConsent, setShowConsent] = useState(false)

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent')
        if (!consent) {
            setShowConsent(true)
        }
    }, [])

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted')
        setShowConsent(false)
    }

    if (!showConsent) {
        return null
    }

    return (
        <div className="fixed bottom-0 w-full py-6 bg-accent text-white">
            <div className="md:mx-12 flex flex-col md:flex-row items-center justify-between">
                <div className="text-sm mb-4 mx-6 md:mb-0">
                    Wir verwenden auf dieser Website Cookies, die für den
                    grundlegenden Betrieb und die Sicherheit der Website
                    unerlässlich sind. Durch die weitere Nutzung der Website
                    stimmen Sie der Verwendung dieser essentiellen Cookies zu.{' '}
                    <a href="/terms" className="underline">
                        Mehr erfahren
                    </a>
                </div>
                <button
                    onClick={handleAccept}
                    className="ml-6 mr-6 my-2 md:ml-4 md:my-2 btn btn-sm btn-secondary md:mr-0">
                    Ich stimme zu
                </button>
            </div>
        </div>
    )
}

export default CookieConsent
