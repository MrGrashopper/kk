import Head from 'next/head'
import React from 'react'
import {lalezar} from '../styles'

const Imprint = () => {
    return (
        <div className="container m-3 lg:m-10">
            <Head>
                <meta name="robots" content="noindex" />
            </Head>
            <div className={lalezar.className}>
                <h1 className="text-3xl text-primary text-center pt-12">
                    Impressum
                </h1>
            </div>
            <h2 className="text-xl text-primary py-6">
                Ehrenamtlicher Initiator:
            </h2>
            <p>Oliver Gimm</p>
            <p>E-Mail: info@koryo-berlin.de</p>

            <h2 className="text-xl text-primary py-6">Vertreten durch:</h2>
            <p>Sportschule Koryo</p>
            <p>Weichelstr. 8c</p>
            <p>12043 Berlin</p>
            <p>Telefon:030-6249018</p>
            <p>E-Mail-Adresse: Wassim@Koryo-Berlin.de</p>
            <p>Inh. Wassim Khalil</p>
            <p>Umsatzsteuer-Identifikationsnummer: DE02HST00000026026</p>
            <p>Steuernummer : 16/378/00654</p>

            <h2 className="text-xl text-primary py-6">Haftungsausschluss:</h2>

            <h2 className="text-xl text-primary py-6">Haftung für Inhalte</h2>
            <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
                Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
                sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
                Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
                bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die
                auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
                Entfernung oder Sperrung der Nutzung von Informationen nach den
                allgemeinen Gesetzen bleiben hiervon unberührt. Eine
                diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
                Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
                diese Inhalte umgehend entfernen.
            </p>

            <h2 className="text-xl text-primary py-6">Haftung für Links</h2>
            <p>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar. Eine permanente inhaltliche
                Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
                Bekanntwerden von Rechtsverletzungen werden wir derartige Links
                umgehend entfernen.
            </p>

            <h2 className="text-xl text-primary py-6">Urheberrecht</h2>
            <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten,
                nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
                dieser Seite nicht vom Betreiber erstellt wurden, werden die
                Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
                Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
                Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
                entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
                werden wir derartige Inhalte umgehend entfernen.
            </p>

            <p>
                Impressum vom impressum-generator.de der Kanzlei Hasselbach
                Rechtsanwälte
            </p>

            <p className="mt-10">Letzte Aktualisierung: 17.09.2023</p>
        </div>
    )
}

export default Imprint
