import React from 'react'
import {lalezar} from '../styles'

const PrivacyPolicy = () => {
    return (
        <div className="container m-3 lg:m-10">
            <div className={lalezar.className}>
                <h1 className="text-3xl text-primary text-center pt-12">
                    Datenschutzerklärung
                </h1>
            </div>
            <h2 className="text-xl text-primary py-6">Einleitung</h2>
            <p>
                Herzlich willkommen auf unserer Webseite. Im Folgenden möchten
                wir Sie über den Umgang mit Ihren personenbezogenen Daten bei
                der Nutzung unserer Webseite informieren.
            </p>

            <h2 className="text-xl text-primary py-6">
                Verantwortliche Stelle
            </h2>
            <p>[Name und Adresse des Verantwortlichen]</p>

            <h2 className="text-xl text-primary py-6">
                Datenerfassung und -verarbeitung
            </h2>

            <h2>Essentielle Cookies</h2>
            <p>
                Unsere Webseite verwendet essentielle Cookies, um grundlegende
                Funktionen der Webseite sicherzustellen. Diese Cookies sind
                notwendig, um Ihnen die Webseite zugänglich zu machen. Sie
                können in Ihrem Browser alle Cookies blockieren oder löschen,
                jedoch kann die Funktionalität der Webseite eingeschränkt sein.
            </p>

            <h2 className="text-xl text-primary py-6">Externe Links</h2>
            <p>
                Unsere Webseite enthält Links zu externen Webseiten. Wir haben
                keinen Einfluss darauf, wie die Betreiber der externen Webseiten
                mit Ihren Daten umgehen. Bitte informieren Sie sich auf den
                jeweiligen Webseiten über den Umgang mit Ihren personenbezogenen
                Daten.
            </p>

            <h2 className="text-xl text-primary py-6">Ihre Rechte</h2>

            <h2 className="text-xl text-primary py-6">Auskunftsrecht</h2>
            <p>
                Sie haben das Recht, jederzeit Auskunft über die bei uns
                gespeicherten personenbezogenen Daten zu erhalten.
            </p>

            <h2 className="text-xl text-primary py-6">
                Recht auf Berichtigung, Löschung und Einschränkung der
                Verarbeitung
            </h2>
            <p>
                Sie haben das Recht, die Berichtigung, Löschung oder
                Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
                verlangen.
            </p>

            <h2 className="text-xl text-primary py-6">Recht auf Widerspruch</h2>
            <p>
                Sie haben das Recht, jederzeit gegen die Verarbeitung Ihrer
                personenbezogenen Daten Widerspruch einzulegen.
            </p>

            <h2 className="text-xl text-primary py-6">
                Recht auf Datenübertragbarkeit
            </h2>
            <p>
                Sie haben das Recht, Ihre personenbezogenen Daten in einem
                strukturierten, gängigen und maschinenlesbaren Format zu
                erhalten.
            </p>

            <h2 className="text-xl text-primary py-6">Kontakt</h2>
            <p>
                Bei Fragen zur Datenschutzerklärung oder zu Ihren Rechten können
                Sie sich jederzeit an uns wenden:
            </p>
            <p>[Name und Kontaktinformationen des Datenschutzbeauftragten]</p>

            <h2 className="text-xl text-primary py-6">
                Änderungen der Datenschutzerklärung
            </h2>
            <p>
                Wir behalten uns vor, diese Datenschutzerklärung zu ändern, um
                sie an geänderte Rechtslagen oder bei Änderungen des Dienstes
                sowie der Datenverarbeitung anzupassen.
            </p>
            <p>Letzte Aktualisierung: [Datum]</p>
        </div>
    )
}

export default PrivacyPolicy
