'use client'
import {TaskWithImage} from '../../../components/TaskWithImage'
import {lalezar} from '../../../styles'
import {NoAccess} from '../../components/noAccess'
import {Task} from '../../components/task'
import {TaskDefault} from '../../components/taskDefault'
import {isTierAccessible} from '../../utils'

const BlueArea = () => {
    const task1 = [
        'Block 1 + Jap → Arm des Angreifers greifen u. Stoß mit vorderem Knie → Uppercut mit vorderem Ellbogen → Körperdrehung u. dabei Arm des Angreifers auf eigener Schulter brechen → Wurf',
        'Block 2 + Jap → Arm des Angreifers packen → Haken mit vorderem Ellbogen → Stoß mit vorderem Knie → a) Scherwurf b) unter Angriffsarm des Gegners hindurch → Arm auf Rücken drehen → mit freier Hand Gegner nach hinten ziehen (Hals, Haare, Schulter) → Kniestoß in den Rücken → Stampftritt ins Knie',
        'Block 3 + Jap → Stoß mit vorderem Knie → Haken mit vorderem Ellbogen → geblockten Arm des Angreifers auf dessen Rücken schieben → zweiter Arm greift von oben zu → Bein vor den Angreifer bringen → hebeln und werfen',
        'Block 4 + Backfist → Arm des Angreifers packen → Haken mit vorderem Ellbogen → Stoß mit vorderem Knie → Kipphandhebel nach außen mit Körperdrehung',
        'Block 5 → Arm des Angreifers mit hinterer Hand packen → Stoß mit vorderem Knie → Ellbogen-Handgelenkhebel, sodass sich Angreifer nach vorne neigt → Tritt zum Kopf → über gehebelten Arm steigen → Körperdrehung, wobei Arm des Angreifers zwischen Beinen eingeklemmt ist'
    ]
    const task2 = [
        'Roundhousekick: mit Scherblock in Angreifer hineingehen → a) mit vorderem Arm Schlag gegen Schulter oder Kopf → b) Bein fangen → Backfist mit vorderem Arm → Kniestoß → Scherwurf',
        'Frontkick: a) seitlich drehen und dabei mit vorderem Arm von unten Bein fangen → Sidekick zum Standbein → zweiter Arm packt ebenfalls zu → Körperdrehung → Wurf b) Sidestep bzw. seitlicher Ausfallschritt → Bein des Angreifers über Block 3 fangen → Jap mit anderem Arm → Kniestoß → Wurf',
        'Sidekick: a) Block 3 → Jap mit hinterem Arm → Kniestoß zum Rücken → Stampftritt zum Knie oder Fußfeger b) Push-Down → weiter Schritt hinter Angreifer und dabei Schlag zum Unterleib → Wurf',
        'Halbmondtritt nach außen: a) mit hohem Außenblock (Block 2) hinter Angreifer bewegen → Schwerwurf (Blockarm = Wurfarm) b) hoher Außenblock (Block 2) → Jap mit hinterem Arm → Kniestoß zum Rücken → Stampftritt zum Knie oder Fußfeger',
        'Halbmondtritt nach innen: Block oder Doppelblock → Ellbogenstoß zu Kopf → Hüft- oder Scherwurf',
        'Hackentritt:	a) wie gegen Halbmondtritt nach außen b) mit Scherblock in Angreifer hineingehen → Trittbein fangen und auf eigener Schulter fixieren → Fußfeger mit hinterem Bein'
    ]
    const task3 = [
        'Backfist → Blockarm greifen + herunterdrücken → Backfist mit anderer Hand → Blockarm greifen + herunterdrücken → beide Arme des Gegners an dessen Körper drücken → Kniestoß → Kopfstoß ⇒ Variante: unteren Arm loslassen und nun freie Hand zum Schlagen verwenden',
        'Backfist mit Arm 1 → Blockarm mit Arm 2 wegschlagen → wieder Backfist mit Arm 1 → Ellbogen von Arm 1 über Blockarm „rollen“ → Ellbogenschlag → Kniestoß',
        'Jap mit Arm 1 → Blockarm mit Arm 2 wegschieben → erneuter Jap mit Arm 1 → umgreifen und 2. Blockarm über 1. Kreuzen → beide Arme des Gegners an dessen Körper drücken → Jap → Ellbogenschlag → Kniestoß',
        'Sidestep mit Schwinger → andere Hand übernimmt Blockarm → Körperhaken → Kniestoß → Ellbogenschlag',
        'Abwehr eines Schlages zum Körper mit hinterem Arm → Jap mit vorderem Arm → Schlaghand ergreift anderen Arm des Angreifers → ziehen → vorderer Unterarm blockiert dadurch Oberarm des Angreifers → umgreifen, wodurch Schlagarm wieder frei wird → Jap → Kniestoß',
        'Angreifer steht spiegelbildlich → Abwehr eines Schlages zum Körper mit Block Nr. 5 → mit anderer Hand übernehmen → Backfist → Blockarm greifen + herunterdrücken → Unterleibstritt → Stampftritt → Ellbogenschläge re und li',
        '3 Varianten, Chi Sao-Versuche abzuwehren: a) bereits heruntergedrückten Arm als „Falle“ für Angreifer nutzen b) bereits überkreuzte Arme anwinkeln und auseinanderziehen c) mit bereits überkreuzten Armen schnell wegdrehen → Schritt'
    ]
    const task4 = [
        'Stampftritt → Roundhouse zur Mitte → Revers-Roundhouse → Sidekick Mitte → Sidekick Knie → Hackentritt → Roundhouse zum Kopf → Unterleibstritt → Kinntritt → Halbmondtritt nach außen → Gedrehter Hackentritt → Halbmondtritt nach innen'
    ]
    const task5 = [
        'auf Rücken liegend Abwehr von Tritt gegen Beine / Unterleib',
        'auf Rücken liegend Abwehr von Tritt gegen Kopf / Brust',
        'auf Seite liegend Abwehr von Tritt gegen Beine / Unterleib',
        'auf Seite liegend Abwehr von Tritt gegen Kopf / Brust'
    ]
    const task6 = [
        'schnell reagieren und konsequent kombinieren',
        'von Treffern nicht beirren lassen',
        'mit deutlicher Überlegenheit beenden (angedeuteter Wirkungstreffer, Hebel, Wurf)'
    ]

    if (!isTierAccessible('blue_jkd')) return <NoAccess />

    return (
        <div className="m-3 lg:mx-10 z-0">
            <h3 className="mt-20 mb-12 text-3xl text-primary text-center">
                <div className={lalezar.className}>
                    Prüfungsporgramm blau JKD
                </div>
            </h3>
            <p className="mx-3 text-xl text-primary my-12 md:text-center">
                Das Programm umfasst die 5. und 6. Stufe → mehr Inhalte, längere
                Übungs- und Prüfungsdauer, dafür aber nur 1 Prüfung statt 2.
            </p>
            <div className="divider mx-3 lg:mx-10"></div>
            <h2 className={`text-xl text-center font-bold text-primary py-6`}>
                - Bereich Jeet Kune Do -
            </h2>
            <div className="mx-3 lg:mx-10 bg-base-100 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto grid-auto-flow-dense">
                    <Task
                        title="Abwehrkombinationen gegen Schläge"
                        subTitle="Die Blöcke entsprechen denen aus dem Prüfungsprogramm schwarz"
                        task={task1}
                        color="blue"
                    />
                    <Task
                        title="Abwehrkombinationen gegen Tritte"
                        task={task2}
                        color="blue"
                    />
                    <Task
                        title="Chi Sao Kombinationen"
                        subTitle="sowohl als Angriffs- als auch als Verteidigungskombinationen (Beschreibung 3.1 – 3.4 als Angriff)"
                        task={task3}
                        color="blue"
                    />
                    <TaskWithImage
                        title="3er-Trittkombinationen"
                        task={['Kombinationen 1 - 4']}
                        color="blue"
                        images={[
                            {
                                src: '/member/blue/3er-Tritte-1.jpg',
                                alt: 'Grundfausschläge'
                            }
                        ]}
                    />
                    <TaskWithImage
                        title="3er-Trittkombinationen"
                        task={['Kombinationen 5 - 8']}
                        color="blue"
                        images={[
                            {
                                src: '/member/blue/3er-Tritte-2.jpg',
                                alt: 'Grundfausschläge'
                            }
                        ]}
                    />
                    <TaskWithImage
                        title="3er-Trittkombinationen"
                        task={['Kombinationen 9 - 10']}
                        color="blue"
                        images={[
                            {
                                src: '/member/blue/3er-Tritte-3.jpg',
                                alt: 'Grundfausschläge'
                            }
                        ]}
                    />
                    <TaskDefault
                        title="Die 12 Tritte"
                        subTitle="möglichst wenig absetzen - alle jeweils ohne Beinwechsel"
                        task={task4}
                        color="blue"
                    />
                    <Task
                        title="Abwehr aus dem Liegen"
                        task={task5}
                        color="blue"
                    />
                    <Task
                        title="Freie Verteidigung gegen verschiedene Angriffe"
                        task={task6}
                        color="blue"
                    />
                </div>
            </div>
        </div>
    )
}

export default BlueArea
