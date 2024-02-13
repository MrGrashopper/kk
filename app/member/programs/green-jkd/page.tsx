'use client'
import {lalezar} from '../../../styles'
import {NoAccess} from '../../components/noAccess'
import {Task} from '../../components/task'
import {isTierAccessible} from '../../utils'

const GreenArea = () => {
    const task1 = [
        'Unterarmblock (Unterarme parallel aneinander) gegen hohe Tritte',
        'Scherblock gegen Körper- und Kopftritte (v.a. gegen Roundhousekick) re und li',
        'Unterarmblock (Unterarme antiparallel aneinander) gegen mittelhohe Tritte, Arme dicht am Körper',
        'Push-Down: mit beiden Armen von oben auf Trittbein schlagen'
    ]

    const task2 = [
        'Sidekick: Push-Down → vordere oder hintere Gerade',
        'Roundhousekick: Scherblock → Backfist mit jeweils vorderem Arm',
        'Front-/ Side-/ Backkick: Block Nr.3 (unten-außen) mit vorderem Arm → hintere Gerade',
        'Front- / Side- / Backkick: aus der Körperdrehung Trittbein fangen → Sidekick zum Standbein',
        'Halbmondtritt: hoher Außenblock (Nr.2) → hintere Gerade oder Kopfhaken mit Blockarm'
    ]

    const task3 = [
        'Lowkick zur Innenseite → Schienbeinblock → Sidekick zum Standbein → Sidekick zum Körper oder Kopf (alles mit demselben Bein)',
        'Lowkick zur Außenseite → Schienbeinblock → Unterleibstritt → Beinwechsel: Kinntritt',
        'Unterleibstritt mit hinterem Bein → Stopper mit Fußsohle → Sidekicks zum Körper und zum Kopf (beliebige Reihenfolge)',
        'Unterleibstritt mit vorderem Bein → ein Bein zum Schutz des Unterleibs eindrehen → Konterschlag (Jap oder Backfist)',
        'angelaufener oder angeglittener Side- oder Hackentritt → Vorwärtstritt als Stopper → Roundhouse zum Körper oder Unterleib → Hammertritt (Axekick)',
        'Hackentritt → Halbmond- oder Hammertritt → Roundhouse zum Körper oder Unterleib → Sidekick zum Knie'
    ]

    const task4 = [
        'Unterleib - Stampftritt - Halbkreis Mitte - Sidekick Mitte',
        'Halbkreis Mitte - Halbkreis Kopf - Sidekick Mitte - Hacken',
        'Hacken - Halbkreis Kopf - Sidekick Mitte - Rückwärtstritt',
        'Halbmondtritt außen - Hammertritt außen - Frontkick von hinten - Halbmond innen von hinten (re , re , li, re)',
        'Seitwärtstritte: Mitte - unten - oben → Rückwärtstritt > gedrehter Halbmond - oder Hackentritt'
    ]

    const task5 = [
        'Halbkreistritt zum Bauch → Sidekick zum Knie → Backfist zum Kopf',
        'Unterleibstritt → Stampftritt → Jap zum Kopf',
        'Lowkick zur Bein-Rückseite > Halbkreistritt zum Bauch mit anderem Bein → Schwinger',
        'Vorwärtstritt → Jap zum Kopf → Haken zum Körper mit anderer Faust',
        'Sidekick zum Knie → Schwinger → Rückwärtstritt',
        'Knie zum Unterleib → Ellbogen-Uppercut → Ellbogen-Schwinger mit anderem Arm'
    ]

    const task6 = [
        'Kipphandhebel nach außen',
        'Kipphandhebel nach innen',
        'Oberarm-Schulterhebel aus dem Scherblock',
        'Handgelenk-Ellbogenhebel von oben',
        'Handgelenk-Ellbogenhebel von unten'
    ]

    const task7 = [
        'sinnvolle und Kombination erlernter Techniken Anwendung',
        'dem Gegner angemessene Positionierung und Bewegung',
        'eigene Deckung berücksichtigen, Einzeltechniken vermeiden'
    ]

    const images = []

    for (let i = 0; i < 3; i++) {
        // eslint-disable-next-line no-constant-condition
        if (`../galleryJKD/JKD${i}.jpeg`) {
            images.push({
                src: `/galleryJKD/JKD${i}.jpeg`,
                alt: `JKD Image ${i}`
            })
        }
    }

    if (!isTierAccessible('green_jkd')) return <NoAccess />

    return (
        <div className="m-3 lg:mx-10">
            <h3 className="mt-20 mb-12 text-3xl text-primary text-center">
                <div className={lalezar.className}>
                    Prüfungsprogramm grün JKD
                </div>
            </h3>
            <p className="mx-3 text-xl text-primary my-12 md:text-center">
                Das Programm umfasst die 3. und 4. Stufe, dafür aber mehr
                Inhalte, längere Übungs- und Prüfungsdauer, dafür aber nur 1
                Prüfung statt 2
            </p>
            <div className="divider mx-3 lg:mx-10 mb-9"></div>
            <div className="mx-3 lg:mx-10 bg-base-100 mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mx-auto">
                    <Task
                        title="Doppelblocktechniken gegen Tritte mit zwei Armen"
                        task={task1}
                        color="green"
                    />
                    <Task
                        title="Blocken gegen Tritte mit einfachen Konterschlägen"
                        task={task2}
                        color="green"
                    />
                    <Task
                        title="Blocken gegen Tritte mit eigenen Beinen"
                        task={task3}
                        color="green"
                    />
                    <Task
                        title="Trittkombinationen"
                        task={task4}
                        color="green"
                    />
                    <Task
                        title="Trit-Schlagt-Kombinationen"
                        task={task5}
                        color="green"
                    />
                    <Task title="Armhebel" task={task6} color="green" />
                    <Task title="Freikampf" task={task7} color="green" />
                </div>
            </div>
            {/* <Carousel images={images} /> */}
        </div>
    )
}

export default GreenArea
