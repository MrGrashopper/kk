'use client'
import {TaskWithImage} from '../../../components/TaskWithImage'
import {lalezar} from '../../../styles'
import {NoAccess} from '../../components/noAccess'
import {Task} from '../../components/task'
import {isTierAccessible} from '../../utils'

const YellowArea = () => {
    const task1 = [
        'Teng Kong Fei Jiao; Absprung, Spannschlag, Landung erfolgen auf demselben Bein',
        'Chiäm Sao (tiefer Fußfeger vw) → Xuan Fei Jiao',
        'Hou Sao (gedrehter Fußfeger rw) → gesprungen gedrehter Hackentritt'
    ]

    const task2 = [
        'Shu Cha (Längsspagat)',
        'Hiao Long Jiao (aus dem Liegen aufwirbeln)',
        'Li Yu Da Ting (Kippe) → Option: Nackenkippe / Kippe ohne Hände',
        'Hou Shu Fan (Flick-Flack) → Option: Hou Kong Fan (Rückwärtssalto)',
        'Zusätzoption: Xuan Ti (Schraube)',
        'Zusätzoption: Ze Kong Fan (Rad ohne Hände)'
    ]

    const task3 = [
        'Bisai Chang Chuan (alte Wettkampfform)',
        'Hu Chuan (Nord-Tiger) oder Bao Chuan (Leopard)',
        'He Chuan (Kranich) oder Ying Chuan (Adler)'
    ]

    const task4 = [
        'Fortgeschrittene Form der 1. erlernten Waffe',
        'Fortgeschrittene Form der 2. erlernten Waffe',
        'Form mit einer 3. Waffe'
    ]

    if (!isTierAccessible('yellow_shaolin')) return <NoAccess />

    return (
        <div className="m-3 lg:mx-10 z-0">
            <h3 className="mt-20 mb-12 text-3xl text-primary text-center">
                <div className={lalezar.className}>
                    Prüfungsprogramm gelb Shaolin
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
            <div className="mx-3 lg:mx-10 bg-base-100 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto grid-auto-flow-dense">
                    <Task
                        title="Teng Kong Fa (Sprungtritte)"
                        task={task1}
                        color="yellow"
                    />
                    <Task
                        title="Teng Kong Fa (Sprungtritte)"
                        task={task2}
                        color="yellow"
                    />
                    <Task
                        title="Teng Kong Fa (Sprungtritte)"
                        task={task3}
                        color="yellow"
                    />
                    <TaskWithImage
                        title="Bao Chuan"
                        task={['Seite 1/2']}
                        color="blue"
                        images={[
                            {
                                src: '/member/blue-shaolin/Bao-Chuan-1.png',
                                alt: 'Bao-Chuan-1'
                            }
                        ]}
                    />
                    <TaskWithImage
                        title="Bao Chuan"
                        task={['Seite 2/2']}
                        color="blue"
                        images={[
                            {
                                src: '/member/blue-shaolin/Bao-Chuan-2.png',
                                alt: 'Bao-Chuan-2'
                            }
                        ]}
                    />
                    <TaskWithImage
                        title="He Chuan"
                        task={['Seite 1/3']}
                        color="yellow"
                        images={[
                            {
                                src: '/member/yellow-shaolin/He-Chuan-1.png',
                                alt: 'Grundfausschläge'
                            }
                        ]}
                    />
                    <TaskWithImage
                        title="He Chuan"
                        task={['Seite 2/3']}
                        color="yellow"
                        images={[
                            {
                                src: '/member/yellow-shaolin/He-Chuan-2.png',
                                alt: 'Grundfausschläge'
                            }
                        ]}
                    />
                    <TaskWithImage
                        title="He Chuan"
                        task={['Seite 3/3']}
                        color="yellow"
                        images={[
                            {
                                src: '/member/yellow-shaolin/He-Chuan-3.png',
                                alt: 'Grundfausschläge'
                            }
                        ]}
                    />
                    <Task
                        title="Teng Kong Fa (Sprungtritte)"
                        task={task4}
                        color="yellow"
                    />
                </div>
            </div>
        </div>
    )
}

export default YellowArea
