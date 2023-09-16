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
            <p>Sportschule Koryo</p>
            <p>Weichelstr. 8c 12043 Berlin</p>
            <p>Telefon: 030-6249018 </p>
            <p>E-Mail-Adresse: Wassim@Koryo-Berlin.de</p>
            <p> Inh. Wassim Khalil</p>
            <p>Umsatzsteuer-Identifikationsnummer: DE02HST00000026026</p>
            <p>Steuernummer: 16/378/00654</p>
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
            <h2 className="text-xl text-primary py-6">
                Verwendung von Scriptbibliotheken (Google Webfonts)
            </h2>
            <p>
                Um unsere Inhalte browserübergreifend korrekt und grafisch
                ansprechend darzustellen, verwenden wir auf dieser Website
                Scriptbibliotheken und Schriftbibliotheken wie z. B. Google
                Webfonts (https://www.google.com/webfonts/). Google Webfonts
                werden zur Vermeidung mehrfachen Ladens in den Cache Ihres
                Browsers übertragen. Falls der Browser die Google Webfonts nicht
                unterstützt oder den Zugriff unterbindet, werden Inhalte in
                einer Standardschrift angezeigt. Der Aufruf von
                Scriptbibliotheken oder Schriftbibliotheken löst automatisch
                eine Verbindung zum Betreiber der Bibliothek aus. Dabei ist es
                theoretisch möglich – aktuell allerdings auch unklar ob und ggf.
                zu welchen Zwecken – dass Betreiber entsprechender Bibliotheken
                Daten erheben. Die Datenschutzrichtlinie des
                Bibliothekbetreibers Google finden Sie hier:
                https://www.google.com/policies/privacy/
            </p>

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
            <h2 className="text-xl text-primary py-6">SSL-Verschlüsselung</h2>
            <p>
                Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen,
                verwenden wir dem aktuellen Stand der Technik entsprechende
                Verschlüsselungsverfahren (z. B. SSL) über HTTPS.
            </p>
            <h2 className="text-xl text-primary py-6">Kontakt</h2>
            <p>
                Bei Fragen zur Datenschutzerklärung oder zu Ihren Rechten können
                Sie sich jederzeit an uns wenden:
            </p>
            <p>Sportschule Koryo</p>
            <p>Weichelstr. 8c 12043 Berlin</p>
            <p>Telefon: 030-6249018 </p>
            <p>E-Mail-Adresse: Wassim@Koryo-Berlin.de</p>
            <p> Inh. Wassim Khalil</p>

            <h2 className="text-xl text-primary py-6">
                Änderungen der Datenschutzerklärung
            </h2>
            <p>
                Wir behalten uns vor, diese Datenschutzerklärung zu ändern, um
                sie an geänderte Rechtslagen oder bei Änderungen des Dienstes
                sowie der Datenverarbeitung anzupassen.
            </p>
            <p>Letzte Aktualisierung: 17.09.2023</p>
        </div>
    )
}

export default PrivacyPolicy
