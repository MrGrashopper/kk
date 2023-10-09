'use client'
import {Carousel} from '../../../components/carousel'
import {lalezar} from '../../../styles'
import {Task} from '../../components/task'

const GreenArea = () => {
    const task1 = [
        'paralleler Unterarmblock oben Mitte, oben rechts, oben links > gegen Tritte zum Kopf von entsprechender Seite',
        'antiparalleler Unterarmblock am Körper > gegen mittelhohen Vorwärts-, Rückwärts- oder Seitwärtstritt',
        'Kreuz-/Scherblock > gegen Halbkreistritt',
        'Push - Down - Block > gegen Seitwärts- oder Rückwärtstritt'
    ]

    const task2 = [
        'gegen Seitwärtstritt > 1) Pushdown mit beiden Händen > vordere oder hinterer Gerade 2) tiefer Außenblock (Block 3) > Gerade',
        'gegen Halbkreistritt > Scherblock > Backfist mit oberer Hand',
        'gegen Vorwärtstritt > leichte Körperdrehung > Bein mit Unterarm fangen > Seitwärtstritt zum Standbein',
        'gegen Halbmondtritt (nach innen und außen) > hoher Außenblock > Schwinger mit Blockarm oder Gerade mit anderem Arm'
    ]

    const task3 = [
        'Kipphandhebel nach außen',
        'Kipphandhebel nach innen',
        'Oberarmhebel (ein Arm von innen/unten der andere von außen/oben)',
        'Handgelenk-Ellbogenhebel von oben',
        'Handgelenk-Ellbogenhebel von unten'
    ]

    const task4 = [
        'gegen Lowkick zur Innenseite > Schienbeinblock ...',
        'gegen Lowkick zur Außenseite > Schienbeinblock ...',
        'gegen Unterleibstritt mit hinterem Bein > Stopper mit Fußsohle ...',
        'gegen Unterleibstritt mit vorderem Bein > ein Bein zum Schutz eindrehen ..',
        'gegen langen Side - oder Hackentritt > Vorwärtstritt als Stopper ...',
        'gegen kurzen Hackentritt > Halbmondtritt nach außen ...'
    ]

    const task5 = [
        'Unterleib - Stampftritt - Halbkreis Mitte - Sidekick Mitte',
        'Halbkreis Mitte - Halbkreis Kopf - Sidekick Mitte - Hacken',
        'Hacken - Halbkreis Kopf - Sidekick Mitte - Rückwärtstritt',
        'Halbmondtritt außen - Hammertritt außen - Frontkick von hinten - Halbmond innen von hinten (re , re , li, re)',
        'Seitwärtstritte: Mitte - unten - oben → Rückwärtstritt > gedrehter Halbmond - oder Hackentritt'
    ]

    const task6 = [
        'Halbkreistritt zum Bauch > Sidekick zum Knie > Backfist zum Kopf',
        'Unterleibstritt > Stampftritt > Jap zum Kopf',
        'Lowkick zur Bein-Rückseite > Halbkreistritt zum Bauch mit anderem Bein > Schwinger',
        'Vorwärtstritt > Jap zum Kopf > Haken zum Körper mit anderer Faust',
        'Sidekick zum Knie > Schwinger > Rückwärtstritt',
        'Knie zum Unterleib → Ellbogen-Uppercut → Ellbogen-Schwinger mit anderem Arm'
    ]

    const task7 = [
        'sinnvolle Anwendung',
        'Kombinationen',
        'Deckung',
        'richtige Stellung und Bewegung zum Angreifer'
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
    return (
        <div className="m-3 lg:mx-10">
            <h3 className="mt-20 mb-12 text-3xl text-primary text-center">
                <div className={lalezar.className}>
                    Prüfungsporgramm grün JKD
                </div>
            </h3>
            <div className="mx-3 lg:mx-10 bg-base-100 mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mx-auto">
                    <Task
                        title="Doppelblocktechniken gegen Tritte mit zwei Armen"
                        task={task1}
                        color="green"
                    />
                    <Task
                        title="Blocktechniken gegen Tritte mit einfachen Konterschlägen"
                        task={task2}
                        color="green"
                    />
                    <Task
                        title="zweihändige Hebel"
                        task={task3}
                        color="green"
                    />
                    <Task
                        title="Blocktechniken gegen Tritte mit den Beinen"
                        task={task4}
                        color="green"
                    />
                    <Task
                        title="Trittkombinationen"
                        task={task5}
                        color="green"
                    />
                    <Task
                        title="Schlag-Tritt-Kombinationen"
                        task={task6}
                        color="green"
                    />
                    <Task title="Freikampf" task={task7} color="green" />
                </div>
            </div>
            {/* <Carousel images={images} /> */}
        </div>
    )
}

export default GreenArea
