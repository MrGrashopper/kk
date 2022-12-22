'use client'
import React from 'react'
import {de} from '../../locale'
import CardCollapse, {HashtagType} from '../../components/cardCollapse'
import {permanentMarker} from '../../styles'
import {motion} from 'framer-motion'

interface Props {
    lang: string
}

const Page = (props: Props) => {
    const strings = props.lang === 'DE' ? de : de
    const images = []

    for (let i = 0; i < 20; i++) {
        if (`../galleryJKD/JKD${i}.jpeg`) {
            images.push({
                src: `../galleryJKD/JKD${i}.jpeg`,
                alt: `JKD Image ${i}`,
            })
        }
    }

    const text4 = [
        {
            title: strings.training.jkd.title4,
            description: strings.training.jkd.desc4,
        },
    ]

    const motionTitle = (title: string, text: string) => {
        return (
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: false}}>
                <div className={permanentMarker.className}>
                    <div className="card-title">{title}</div>
                </div>
                <p className="text-xl mt-3">{text}</p>
            </motion.div>
        )
    }

    return (
        <div className="m-3">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img src="../jkd_technique_block.jpeg" alt="Album" />
                </figure>
                <div className="card-body">
                    {motionTitle(
                        strings.training.jkd.title1,
                        strings.training.jkd.desc1
                    )}
                    <div className="card-actions justify-end"></div>
                </div>
            </div>
            <div className="carousel carousel-center h-auto rounded-box my-5">
                {images.map(image => {
                    return (
                        <div className="carousel-item w-5/6 mx-2.5">
                            <img src={image.src} alt={image.alt} />
                        </div>
                    )
                })}
            </div>

            <ul className="steps w-full steps-horizontal my-5">
                <li className="step step-primary mx-2">Basistechniken</li>
                <li className="step step-primary mx-2">
                    Erste Erfahrung im Kampf
                </li>
                <li className="step step-primary mx-2">
                    Fortgeschrittenes Training
                </li>
                <li className="step step-secondary mx-2">
                    Finde deinen eigenen Stil
                </li>
            </ul>

            <div className="my-5">
                <CardCollapse
                    lang={'de'}
                    texts={text4}
                    hashtag={HashtagType.INFO}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                <div className="card lg:card-side bg-base-100 shadow-xl mb-10">
                    <div className="card-body">
                        {motionTitle(
                            strings.training.jkd.title2,
                            strings.training.jkd.desc2
                        )}
                        <div className="card-actions justify-end"></div>
                    </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl mb-10">
                    <div className="card-body">
                        {motionTitle(
                            strings.training.jkd.title3,
                            strings.training.jkd.desc3
                        )}
                        <div className="card-actions justify-end"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
