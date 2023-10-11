'use client'
import {CombinedTaskAndCarousel} from '../../../components/combinedTaskAndCarousel'
import {lalezar} from '../../../styles'
import {Task} from '../../components/task'
import {TaskDefault} from '../../components/taskDefault'

const BlackArea = () => {
    const task1 = [
        'Jap → Uppercut → Backfist seitlich Kopf → Unterleibsschlag seitlich → Backfist seitlich Körper → Ellbogenschlag frontal zur Schläfe → Handkantenschlag zum Kehlkopf → Doppelhandflächenstoß (Nase + Solar plexus) → Doppelhandkantenstoß (Kehlkopf + Solar plexus) → Doppelhandflächenstoß in die Taille / untere Rippen'
    ]
    const task2 = [
        're, li frontal zum Kehlkopf, re, li von außen zu Halsschlagadern, re, li zur Taille, re, li mit Handballen zum Kinn / zur Nase, seitl. Doppelschlag mit Handballen zur Schläfe + zu den Rippen von li und von re, Doppelschlag mit Handballen unter die Rippen, Doppelschlag mit Handballen auf die Ohren'
    ]

    const task3 = [
        'Block 1: Jap zum Kopf → oberer Block nach innen',
        'Block 2: Kopfhaken → oberer Block nach außen',
        'Block 3: Körperhaken → unterer Block nach außen',
        'Block 4: Gerade zum Körper / Abwärtshaken → Arm diagonal abwärts mit Körperdrehung',
        'Block 5: Gerade zum Körper / Abwärtshaken Stopper → Block frontal abwärts',
        'Erweiterung: Blöcke mit Konterkombinationen'
    ]

    const task4 = [
        'Unterleibstritt → Halbkreistritt → Seitwärtstritt → Stampftritt → Beinwechsel: Vorwärtstritt → Beinwechsel: gedrehter Rückwärtstritt'
    ]

    const task5 = [
        'seitlich re und li, treten nach der Landung',
        'frontal → seitlich drehen und treten'
    ]

    return (
        <div className="m-3 lg:mx-10">
            <h3 className="mt-20 mb-12 text-3xl text-primary text-center">
                <div className={lalezar.className}>
                    Prüfungsporgramm schwarz
                </div>
            </h3>
            <p className="mx-3 text-xl text-primary my-12 md:text-center">
                Das Programm umfasst die 1. und 2. Stufe → mehr Inhalte, längere
                Übungs- und Prüfungsdauer, dafür aber nur 1 Prüfung statt 2. Die
                ersten beiden Stufen umfassen die Grundlagen des Shaolin Kung Fu
                und des Jeet Kune Do
            </p>
            <div className="divider"></div>
            <h2 className={`text-xl text-center font-bold text-primary py-6`}>
                - Bereich Jeet Kune Do -
            </h2>
            <div className="mx-3 lg:mx-10 bg-base-100 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto grid-auto-flow-dense">
                    <CombinedTaskAndCarousel
                        title="Grundschläge"
                        task={task1}
                        color="primary"
                        images={[
                            {
                                src: '/member/black/Grundfaustschläge.jpg',
                                alt: 'Grundfausschläge'
                            }
                        ]}
                    />
                    <TaskDefault
                        title="Handkantenschläge"
                        task={task2}
                        color="primary"
                    />
                    <Task
                        title="Schläge mit passenden Einhand-Blöcke"
                        task={task3}
                        color="primary"
                    />
                    <TaskDefault
                        title="Grundtritte"
                        task={task4}
                        color="primary"
                    />
                    <Task title="Fallen" task={task5} color="primary" />
                </div>
            </div>
            <div className="divider"></div>
            <h2 className={`text-xl text-center font-bold text-primary py-6`}>
                - Bereich Shaolin Kung Fu -
            </h2>
        </div>
    )
}

export default BlackArea
