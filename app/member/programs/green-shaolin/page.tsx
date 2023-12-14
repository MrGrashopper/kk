'use client'
import {lalezar} from '../../../styles'
import {NoAccess} from '../../components/noAccess'
import {Task} from '../../components/task'
import {TaskDefault} from '../../components/taskDefault'
import {isTierAccessible} from '../../utils'

const GreenShaolinArea = () => {
    const task1 = [
        'Kinntritt frontal, Arme seitlich auf Schulterhöhe gestreckt (Ching Ti Tui)',
        'Seitwärtstritt, Arme überkreuzen beim Wechsel → Strecken (Chuai Tui)',
        'Hammertritt nach innen, Handfläche gegen Sohle schlagen (Lii He Tui)',
        'Halbmondtritt nach außen, gegen Handfläche (Wäi Bei Tui)',
        'Kinntritt seitlich-außen, Gegenarm über Kopf gestreckt (Zi Ti Tui)',
        'Kinntritt über Kreuz, Arme seitlich auf Schulterhöhe gestreckt (Shiä Ti Tui)',
        'Tritt vorn nach oben, mit Hand auf Spann schlagen (Dan Bai Tui) → Erweiterung: mit Chang Chuan Armzyklus',
        'Unterleibstritt mit traditionellem Fauststoß des Gegenarms (Tan Tui Chung Chuan)',
        'Vorwärtstritt mit Handflächenstoß des Gegenarms (Ding Tui Chung Zhang)'
    ]
    const task2 = ['Chang Chuan Ji Ben Gong']

    const task3 = ['Liän Huan Chuan', 'Ji Ti Chuan', 'Wu Xing Chuan']

    const task4 = ['Teng Kong Pai Jiao', 'Xuan Feng Jiao', 'Xuan Zi']

    if (!isTierAccessible('green_shaolin')) return <NoAccess />

    return (
        <div className="m-3 lg:mx-10 z-0">
            <h3 className="mt-20 mb-12 text-3xl text-primary text-center">
                <div className={lalezar.className}>
                    Prüfungsporgramm grün Shaolin
                </div>
            </h3>
            <p className="mx-3 text-xl text-primary my-12 md:text-center">
                Das Programm umfasst die 2. und 3. Stufe → mehr Inhalte, längere
                Übungs- und Prüfungsdauer, dafür aber nur 1 Prüfung statt 2.
            </p>
            <div className="mx-3 lg:mx-10 bg-base-100 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto grid-auto-flow-dense">
                    <Task
                        title="Standard-Tritte → Bahnenlauf"
                        task={task1}
                        color="green"
                    />
                    <TaskDefault
                        title="Grundfaustzyklus"
                        task={task2}
                        color="green"
                    />
                    <Task title="Tao Lu (Formen)" task={task3} color="green" />
                    <Task title="Tao Lu (Formen)" task={task4} color="green" />
                </div>
            </div>
        </div>
    )
}

export default GreenShaolinArea
