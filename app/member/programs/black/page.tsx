'use client'
import {Carousel} from '../../../components/carousel'
import {lalezar} from '../../../styles'
import {Task} from '../../components/task'

const BlackArea = () => {
    const task1 = [
        'Jap -> Uppercut -> Hook -> frontkick',
        'Jap -> Uppercut -> Hook -> Sidekick -> Roundhousekick',
        'Jap -> Uppercut -> Hook -> Hookkick -> Backkick',
        'Jap -> Uppercut -> Hook -> Jap'
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
                    Prüfungsporgramm schwarz
                </div>
            </h3>
            <div className="mx-3 lg:mx-10 bg-base-100 mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mx-auto">
                    <Task
                        title="Handkombinationen"
                        task={task1}
                        color="primary"
                    />
                    <Task
                        title="Trittkombinationen"
                        task={task1}
                        color="primary"
                    />
                    <Task
                        title="Handkantenschläge"
                        task={task1}
                        color="primary"
                    />
                    <Task
                        title="Grundstellungen"
                        task={task1}
                        color="primary"
                    />
                </div>
            </div>
            <Carousel images={images} />
        </div>
    )
}

export default BlackArea
