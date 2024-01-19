'use client'
import {TaskWithImage} from '../../../components/TaskWithImage'
import {lalezar} from '../../../styles'
import {NoAccess} from '../../components/noAccess'
import {Task} from '../../components/task'
import {TaskDefault} from '../../components/taskDefault'
import {isTierAccessible} from '../../utils'

const BlueArea = () => {
    const task1 = [
        'Teng Kong Pai Jiao',
        'Xuan Feng Jiao',
        'Wai Bai Lian',
        'Cè shǒu fān (Radschlag)',
        'Chiäm Sao (tiefer Fußfeger vorwärts) → mit Sprung über Standbein',
        'Hou Sao (tiefer Fußfeger rückwärts) → mit Sprung über Standbein'
    ]
    const task2 = [
        'Hu Chuan (Süd-Tiger) oder Lung Chuan (Süd-Drache)',
        ' Nan Chuan (Süd-Faust)'
    ]

    const task3 = [
        'Kurzwaffe: Jian Shu',
        'Kurzwaffe: Dao Shu',
        'Langwaffe: Gun Shu',
        'Langwaffe: Qiang Shu'
    ]

    if (!isTierAccessible('blue_jkd')) return <NoAccess />

    return (
        <div className="m-3 lg:mx-10 z-0">
            <h3 className="mt-20 mb-12 text-3xl text-primary text-center">
                <div className={lalezar.className}>
                    Prüfungsporgramm blau Shaolin
                </div>
            </h3>
            <p className="mx-3 text-xl text-primary my-12 md:text-center">
                Das Programm umfasst die 4. und 5. Stufe → mehr Inhalte, längere
                Übungs- und Prüfungsdauer, dafür aber nur 1 Prüfung statt 2.
            </p>
            <div className="divider mx-3 lg:mx-10"></div>
            <div className="mx-3 lg:mx-10 bg-base-100 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto grid-auto-flow-dense">
                    <Task title="Basistritte" task={task1} color="blue" />
                    <Task
                        title="Tao Lu - waffenlose Formen"
                        subTitle="waffenlose Formen"
                        task={task2}
                        color="blue"
                    />
                    <Task
                        title="Tao Shu - Waffen-Formen"
                        subTitle="mindestens eine Kurz- und eine Langwaffe"
                        task={task3}
                        color="blue"
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
                        title="Lung Chuan"
                        task={['Seite 1/2']}
                        color="blue"
                        images={[
                            {
                                src: '/member/blue-shaolin/Lung-Chuan-1.png',
                                alt: 'Lung-Chuan-1'
                            }
                        ]}
                    />
                    <TaskWithImage
                        title="Lung Chuan"
                        task={['Seite 2/2']}
                        color="blue"
                        images={[
                            {
                                src: '/member/blue-shaolin/Lung-Chuan-2.png',
                                alt: 'Lung-Chuan-2'
                            }
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default BlueArea
