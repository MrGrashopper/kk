'use client'
import {lalezar} from '../../../styles'
import {NoAccess} from '../../components/noAccess'
import {Task} from '../../components/task'
import {isTierAccessible} from '../../utils'

const YellowArea = () => {
    const task1 = [
        'Festhalten einer Hand a) gleichseitig (überkreuz → re vs. re, li vs. li) b) spiegelbildlich (re vs. li, li vs. re)',
        'Arm auf den Rücken drehen',
        'Doppel-Nelson',
        'beidhändiger Kipphandhebel nach vorn-außen',
        'Doppel-bzw. Dreifach-Hebel: Ellbogen, Schulter, (Handgelenk) → von oben und von unten',
        'Festhalten beider Arme vor und hinter dem Körper'
    ]

    const task2 = [
        'Würgen von vorn und von der Seite mit beiden Armen',
        'Würgen mit einem Arm (anderer holt zu Schlag oder Stich aus)',
        'Umklammerung von vorn und hinten, Arme frei',
        'Umklammerung von vorn und hinten, über den Armen',
        'Schwitzkasten von vorn und von der Seite',
        'Haareziehen von vorn und von hinten'
    ]

    const task3 = [
        'Sichelwurf mit vorderem Bein (z.B. O-soto-otoshi, O-soto-gari, O-soto-guruma)',
        'Wurf mit Bein vor dem des Gegners',
        'Sichelwurf mit hinterem Bein (z.B. De-ashi-barai)',
        'Schulterwurf (Seoi-nage)'
    ]

    const task4 = [
        'Stockschlag von außen, von innen, von oben',
        'Stich mit Stock',
        'Messerstich mittlere / tiefe Höhe',
        'Schlitzen von nach außen',
        'Schlitzen von nach innen'
    ]

    const task5 = [
        'Backfist + Unterleibstritt → Gerade + Rückwärtstritt → Beinwechsel: Kinntritt → Beinwechsel: Seitwärtstritt',
        'Gerade + Rückwärtstritt → Backfist + Unterleibstritt → Beinwechsel: Seitwärtstritt → Beinwechsel: Hackentritt',
        'Stampftritt → Seitwärtstritt Knie → Halbkreistritt mittlere Höhe → Seitwärtstritt mittlere Höhe → Halbkreistritt Kopfhöhe → Beinwechsel: Seitwärtstritt Kopfhöhe',
        'Seitwärtstritt Knie → Stampftritt → Seitwärtstritt mittlere Höhe → Halbkreistritt mittlere Höhe → Seitwärtstritt Kopfhöhe → Beinwechsel: Hackentritt',
        'Halbkreistritt mittlere Höhe → Seitwärtstritt mittlere Höhe → Stampftritt → Seitwärtstritt Knie → Halbkreistritt Kopfhöhe → Beinwechsel: Hackentritt → Beinwechsel (umspringen): Seitwärtstritt mittlere Höhe → Beinwechsel (Cross / Hinterkreuzen): Seitwärtstritt mittlere Höhe'
    ]

    const task6 = ['ohne Waffen', 'mit Schlag- und/oder Stichwaffen']

    const task7 = [
        'Trittversuche zum Kopf und zum Körper → Angreifer nimmt stehend verschiedene Positionen nah am Verteidiger ein',
        'Zufallbringen des Angreifers durch Beinhebel',
        'Schlag- und Hebelversuche des ebenfalls zu Boden gebrachten Gegners'
    ]

    if (!isTierAccessible('yellow_jkd')) return <NoAccess />

    return (
        <div className="m-3 lg:mx-10 z-0">
            <h3 className="mt-20 mb-12 text-3xl text-primary text-center">
                <div className={lalezar.className}>
                    Prüfungsprogramm gelb JKD
                </div>
            </h3>
            <p className="mx-3 text-xl text-primary my-12 md:text-center">
                Das Programm umfasst die 7. und 8. Stufe → mehr Inhalte, längere
                Übungs- und Prüfungsdauer, dafür aber nur 1 Prüfung statt 2. Die
                8. Stufe ist eine Voraussetzung für das Erlangen des
                Trainergrades sind. Die Trainerprüfung umfasst daneben das
                Beherrschen sämtlicher vorangegangener Stufen sowie Kenntnisse
                in Theorie und Methodik. Zudem müssen wenigstens 20
                Trainingseinheiten mit einer Gruppe vom Prüfungskandidaten
                selbstständig durchgeführt worden sein.
            </p>
            <div className="divider mx-3 lg:mx-10"></div>
            <p className="mx-3 lg:mx-10 text-xl text-primary my-12 md:text-center">
                Angegeben sind immer nur die Angriffstechniken, gegen welche der
                Konter zu erfolgen hat. Es muss gegen jede Angriffstechnik
                wenigstens eine Konter-Kombination sicher beherrscht werden. Wer
                die Prüfung im Rahmen seiner Trainerausbildung ablegt, muss
                gegen jeden Angriff verschiedene Konterkombinationen
                demonstrieren können.
            </p>
            <div className="mx-3 lg:mx-10 bg-base-100 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto grid-auto-flow-dense">
                    <Task
                        title="Verteidigung gegen Festhalten und Hebeln der Arme"
                        task={task1}
                        color="yellow"
                    />
                    <Task
                        title="Verteidigung gegen Umklammerungen, Würgegriffe, Haareziehen"
                        task={task2}
                        color="yellow"
                    />
                    <Task
                        title="Verteidigung gegen Wurfversuche"
                        task={task3}
                        color="yellow"
                    />
                    <Task title="Abwehr am Boden" task={task7} color="yellow" />
                    <Task
                        title="Verteidigung gegen Schlag- und Stichwaffen"
                        task={task4}
                        color="yellow"
                    />
                    <Task
                        title="Verteidigung gegen 2 Angreifer"
                        task={task5}
                        color="yellow"
                    />
                    <Task
                        title="Freie Verteidigung gegen 2 Angreifer"
                        task={task6}
                        color="yellow"
                    />
                </div>
            </div>
        </div>
    )
}

export default YellowArea
